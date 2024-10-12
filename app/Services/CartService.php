<?php

namespace App\Services;

use Illuminate\Support\Facades\Session;
use Gloudemans\Shoppingcart\Facades\Cart;

class CartService
{
    public function getCartTotal()
    {
        $total = 0;
        foreach (Cart::content() as $product) {
            $total += ($product->price + $product->options->variants_total) * $product->qty;
        }
        return $total;
    }

    public function getMainCartTotal()
    {
        $subTotal = $this->getCartTotal();
        $coupon = Session::get('coupon', null);

        if ($coupon) {
            if ($coupon['discount_type'] === 'amount') {
                $total = $subTotal - $coupon['discount'];
            } elseif ($coupon['discount_type'] === 'percent') {
                $discount = $subTotal * ($coupon['discount'] / 100);
                $total = $subTotal - $discount;
            }
            return $total;
        }

        return $subTotal;
    }

    public function getCartDiscount()
    {
        $coupon = Session::get('coupon', null);
        $subTotal = $this->getCartTotal();

        if ($coupon) {
            if ($coupon['discount_type'] === 'amount') {
                return $coupon['discount'];
            } elseif ($coupon['discount_type'] === 'percent') {
                return $subTotal * ($coupon['discount'] / 100);
            }
        }

        return 0;
    }

    public function getShippingFee()
    {
        return Session::get('shipping_method.cost', 0);
    }

    public function getFinalPayableAmount()
    {
        return $this->getMainCartTotal() + $this->getShippingFee();
    }
}
