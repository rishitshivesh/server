async function MailTemplate(user, ticket, qr) {
  console.log("called template func");
  const ticketTypes = {
    1: {
      amnt: "250",
      name: "Common Registration",
      desc: "All the events minus pro shows",
    },
    2: {
      amnt: "750",
      name: "Pro Registration",
      desc: "All the events including pro shows",
    },
    3: {
      amnt: "1000",
      name: "Early Bird",
      desc: "All the events including pro shows",
    },
  };

  var template = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
  <style type="text/css">
  @media only screen and (min-width: 520px) {
  .u-row {
  width: 500px !important;
  }
  .u-row .u-col {
  vertical-align: top;
  }
  
  .u-row .u-col-100 {
  width: 500px !important;
  }
  
  }
  
  @media (max-width: 520px) {
  .u-row-container {
  max-width: 100% !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  }
  .u-row .u-col {
  min-width: 320px !important;
  max-width: 100% !important;
  display: block !important;
  }
  .u-row {
  width: 100% !important;
  }
  .u-col {
  width: 100% !important;
  }
  .u-col > div {
  margin: 0 auto;
  }
  }
  body {
  margin: 0;
  padding: 0;
  }
  
  table,
  tr,
  td {
  vertical-align: top;
  border-collapse: collapse;
  }
  
  p {
  margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
  table-layout: fixed;
  }
  
  * {
  line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
  }
  
  table, td { color: #fcfcfc; } #u_body a { color: #0000ee; text-decoration: underline; }
  </style>
  
  
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #182130;color: #fcfcfc">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #182130;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #182130;"><![endif]-->
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
  
  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-right: 0px;padding-left: 0px;" align="center">
  
  <img align="center" border="0" src="https://mewljn.stripocdn.email/content/guids/CABINET_4ad8c835a76ced23d6e65537dd1cf886efb69262b026855b9a5ff6e9ad9e7d56/images/white_milan_2023_logo_ecg.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;" width="480"/>
  
  </td>
  </tr>
  </table>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
  <tbody>
  <tr style="vertical-align: top">
  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
  <span>&#160;</span>
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
  <p style="font-size: 14px; line-height: 140%;">Hey, ${user.fullName}</p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="line-height: 140%; text-align: justify;">Thank You choosing to attend <strong>Milan'23 - National Level Cultural Fest</strong> at SRM Institute of Science &amp; Technology, Kattankulathur from March 2nd -March 5th 2022</p>
  <p style="line-height: 140%; text-align: justify;"> </p>
  <p style="line-height: 140%; text-align: justify;">You have purchased an <strong>${
    ticketTypes[ticket.ticketType]["name"]
  }</strong></p>
  <p style="line-height: 140%; text-align: justify;"> </p>
  <p style="line-height: 140%; text-align: justify;">You are required to <strong>exchange this e-Ticket for a Physical Ticket</strong> at the Helpdesks put up in the SRMIST Campus during Milan'23 .</p>
  <p style="line-height: 140%; text-align: justify;"> </p>
  <p style="line-height: 140%; text-align: justify;">If you have any queries or issues with the tickets or the website and payments feel free to drop us a mail at <span style="color: #fbeeb8; line-height: 19.6px;">t<a rel="noopener" href="mailto:techteam.sa@srmist.edu.in?subject=Queries%20regarding%20Milan%20'23" target="_blank" style="color: #fbeeb8;"><span style="text-decoration: underline; line-height: 19.6px;">echteam.sa@srmist.edu.in</span></a></span> and we'll get back to you at the earliest.</p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="font-size: 14px; line-height: 140%;">Name : ${user.fullName}</p>
  <p style="font-size: 14px; line-height: 140%;">Ticket Type : ${
    ticketTypes[ticket.ticketType]["name"]
  }</p>
  <p style="font-size: 14px; line-height: 140%;">Ticket Price : ${
    ticketTypes[ticket.ticketType]["amnt"]
  }</p>
  <p style="font-size: 14px; line-height: 140%;">Transaction Id : ${
    ticket.pID
  }</p>
  <p style="font-size: 14px; line-height: 140%;">Ticket Purchased On : ${
    ticket.purchasedAt
  }</p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  </div>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-right: 0px;padding-left: 0px;" align="center">
  
  <img align="center" border="0" src=${qr} alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 100%;" width="100"/>
  
  </td>
  </tr>
  </table>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
  <p style="line-height: 140%;">Kind Regards,</p>
  <p style="line-height: 140%;">Team Milan,</p>
  <p style="line-height: 140%;">SRMIST</p>
  </div>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
  <tbody>
  <tr style="vertical-align: top">
  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
  <span>&#160;</span>
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
  <tr>
  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
  
  <div style="font-size: 8px; color: #b9b9b9; line-height: 140%; text-align: center; word-wrap: break-word;">
  <p style="line-height: 140%;">Directorate of Student Affairs, SRM Institute of Science and Technology,<br />SRM Nagar, Kattankulathur, Chennai 603203 IN</p>
  </div>
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  
  
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
  
  `;
  console.log(template);
  return template;
}

module.exports = { MailTemplate };
