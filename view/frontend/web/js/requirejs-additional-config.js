(function(require){
    (function() {
        var config = {
            paths: {
                'Magento_Checkout/js/model/shipping-service': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/select-shipping-method': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/select-billing-address': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/create-billing-address': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/checkout-data': 'LokiCheckout_Luma/js/empty-object',
                'Magento_InventoryInStorePickupFrontend/js/checkout-data-ext': 'LokiCheckout_Luma/js/empty-function',
                'Magento_Checkout/js/model/payment-service': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/select-payment-method': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/new-customer-address': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/payment/method-list': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/set-payment-information-extended': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/action/get-totals': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/default-post-code-resolver': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/payment/place-order-hooks': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/totals': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/shipping-rate-registry': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/shipping-rate-processor/new-address': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/shipping-rate-processor/customer-address': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/quote': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/resource-url-manager': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/error-processor': 'LokiCheckout_Luma/js/empty-object',
                'Magento_Checkout/js/model/url-builder': 'LokiCheckout_Luma/js/empty-object',
                'Magento_PageBuilder/js/widget-initializer': 'LokiCheckout_Luma/js/empty-function',
                'PayPal_Braintree/js/view/payment/adapter': 'LokiCheckout_Luma/js/empty-object',
                'PayPal_Braintree/js/checkoutAgreements/view/checkout-agreements-mixin': 'LokiCheckout_Luma/js/empty-object',
                'Magento_CheckoutAgreements/js/view/checkout-agreements': 'LokiCheckout_Luma/js/empty-object',
            }
        };

        require.config(config);
    })();
})(require);
