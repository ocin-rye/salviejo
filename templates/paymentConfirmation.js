module.exports = (cart, checkout, shipping, charge) => {
  const cartItems = [];

  // console.log('charge: ', charge);
  const now = new Date();
  const date = now.toLocaleDateString();

  cart.forEach((item) => {
    cartItems.push(`<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; padding-bottom: 10px; margin: 0; Margin-bottom: 10px; border-bottom: 1px solid black;">${
      item.name
    } - ${item.style} - Quantity: ${item.quantity} - Price Per Unit: ${item.price}</p>`);
  });

  // console.log(checkout);

  return `<!doctype html>
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>
        /* -------------------------------------
      INLINED WITH htmlemail.io/inline
  ------------------------------------- */

        /* -------------------------------------
      RESPONSIVE AND MOBILE FRIENDLY STYLES
  ------------------------------------- */

        @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }
            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important;
            }
            table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important;
            }
            table[class=body] .content {
                padding: 0 !important;
            }
            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
            }
            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }
            table[class=body] .btn table {
                width: 100% !important;
            }
            table[class=body] .btn a {
                width: 100% !important;
            }
            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
        }

        /* -------------------------------------
      PRESERVE THESE STYLES IN THE HEAD
  ------------------------------------- */

        @media all {
            .ExternalClass {
                width: 100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }
            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }
            .btn-primary table td:hover {
                background-color: #34495e !important;
            }
            .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
            }
        }
    </style>
</head>

<body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
                <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

                    <!-- START CENTERED WHITE CONTAINER -->
                    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Your Kristine Pe&#241;afiel Salviejo order has been received.</span>
                    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                                    <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                            <p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px; text-align: center;">Thank you for ordering!</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; padding-bottom: 10px; margin: 0; Margin-bottom: 10px; text-align: center;">${date}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; text-align: center;">Your order is being processed. We'll send you another email as soon as your order is on the way.</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 10px;">Shipping Details:</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0;">${
  shipping.shipping_name
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0;">${
  shipping.shipping_address_line1
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0;">${
  shipping.shipping_address_city
}, ${shipping.shipping_address_state} ${
  shipping.shipping_address_zip
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0;">${
  shipping.shipping_address_country
}</p>
                                            <br/>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; padding-bottom: 10px; margin: 0; Margin-bottom: 10px; border-bottom: 1px solid black;">Order Details:</p>
                                            ${cartItems
    .toString()
    .split(',')
    .join('')}
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px;">Subtotal: $${
  checkout.subtotal
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px;">Tax: $${
  checkout.tax
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px;">Shipping: $${
  checkout.shipping
}</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 10px; font-weight: bold;">Total: $${
  checkout.total
}</p>
                                            <br/>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px; text-align: center; color: #c2a1c3;">Kristine Pe&#241;afiel Salviejo</p>
                                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; text-align: center;">If you have any questions regarding your order feel free to reach out to me at <a href="kristine.penafiel.salviejo@gmail.com">kristine.penafiel.salviejo@gmail.com</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>


                            </ tr>

                            <!-- END MAIN CONTENT AREA -->
                    </table>

                    <!-- START FOOTER -->
                    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                            <tr>
                                <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                                    <a href="http://kristinesalviejo.com/" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">Kristine Pe&#241;afiel Salviejo</a>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                                    Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">HTMLemail</a>.
                                </td>
                            </tr> -->
                        </table>
                    </div>
                    <!-- END FOOTER -->

                    <!-- END CENTERED WHITE CONTAINER -->
                </div>
            </td>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
            </tr>
    </table>
</body>
</html>
`;
};
