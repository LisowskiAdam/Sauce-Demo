export default {
    cart_list: ".cart_list",
    continue_shopping_button: '[data-test="continue-shopping"]',
    checkout_button: '[data-test="checkout"]',
    first_name: '[data-test="firstName"]',
    last_name: '[data-test="lastName"]',
    zip_postal_code: '[data-test="postalCode"]',
    cancel_button: '[data-test="cancel"]',
    continue_button: '[data-test="continue"]',
    error_message: "#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3",
    finish_button: '[data-test="finish"]',

    // Step two
    backpack_item_name: "#item_4_title_link > div",
    bolt_tshirt_item_name: "#item_1_title_link > div",
    fleece_jacket_item_name: "#item_5_title_link > div",
    backpack_item_desc: "#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.inventory_item_desc",
    bolt_tshirt_item_desc: "#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.inventory_item_desc",
    fleece_jacket_item_desc: "#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label > div.inventory_item_desc",
    backpack_item_price: "#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div",
    bolt_tshirt_item_price: "#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div",
    fleece_jacket_item_price: "#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label > div.item_pricebar > div",
    payment_info: "#checkout_summary_container > div > div.summary_info > div:nth-child(2)",
    shipping_info: "#checkout_summary_container > div > div.summary_info > div:nth-child(4)",
    summary_subtotal_label: "#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label",
    summary_tax_label: "#checkout_summary_container > div > div.summary_info > div.summary_tax_label",
    summary_total_label: "#checkout_summary_container > div > div.summary_info > div.summary_total_label",

    // checkout complete
    checkout_complete_container: "#checkout_complete_container",
    back_home_button: '[data-test="back-to-products"]',
    
}