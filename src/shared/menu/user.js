const buildMenuItem = require("./builder");

module.exports = [
  {
    ...buildMenuItem("userPanel", "User Panel"),
    submenu: [
      buildMenuItem("userPanelHome", "Home"),
      buildMenuItem("changePassword", "Change Password"),
      buildMenuItem("logout", "Logout"),
    ],
  },
  {
    ...buildMenuItem("company", "Company"),
    submenu: [
      buildMenuItem("managePreferences", "Preferences"),
      { type: "separator" },
      buildMenuItem("manageAreas", "Manage Areas"),
      { type: "separator" },
      buildMenuItem("manageWarrantyNotes", "Manage Warranty Notes"),
    ],
  },
  {
    ...buildMenuItem("customers", "Customers"),
    submenu: [buildMenuItem("manageCustomers", "Manage Customers")],
  },
  {
    ...buildMenuItem("salesmen", "Salesmen"),
    submenu: [buildMenuItem("manageSalesmen", "Manage Salesmen")],
  },
  {
    ...buildMenuItem("products", "Products"),
    submenu: [
      buildMenuItem("manageProducts", "Manage Products"),
      { type: "separator" },
      buildMenuItem(
        "manageProductBatches",
        "Manage Product Batches (Inventory)"
      ),
      buildMenuItem(
        "manageProductCustomerPrices",
        "Manage Product Customer Prices"
      ),
    ],
  },
  {
    ...buildMenuItem("invoice", "Invoice"),
    submenu: [
      buildMenuItem("makeInvoice", "Make Invoice"),
      buildMenuItem("invoiceRecord", "Invoice Record"),
    ],
  },
  {
    ...buildMenuItem("payments", "Payments"),
    submenu: [
      buildMenuItem("manageCustomerPayments", "Manage Customer Payments"),
    ],
  },
  {
    ...buildMenuItem("reports", "Reports"),
    submenu: [
      buildMenuItem("saleAndStockReport", "Sale && Stock (SSR)"),
      buildMenuItem("customerLedgerReport", "Customer Ledger"),
    ],
  },
];
