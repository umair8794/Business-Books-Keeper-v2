const appResources = require("../resources/app");
const menuResources = require("../resources/menu");
const appMenu = [];

if (process.platform === "darwin") {
  appMenu.unshift({
    id: menuResources.ids.app,
    label: appResources.name,
    submenu: [
      {
        id: menuResources.ids.quit,
        label: menuResources.labels.quit,
        role: menuResources.roles.quit,
      },
    ],
  });
}

// Admin panel menu
appMenu.push({
  id: menuResources.ids.adminPanel,
  label: menuResources.labels.adminPanel,
  submenu: [
    {
      id: menuResources.ids.adminPanelHome,
      label: menuResources.labels.adminPanelHome,
    },
    {
      id: menuResources.ids.changePassword,
      label: menuResources.labels.changePassword,
    },
    {
      id: menuResources.ids.logout,
      label: menuResources.labels.logout,
    },
  ],
});

// User panel menu
appMenu.push({
  id: menuResources.ids.userPanel,
  label: menuResources.labels.userPanel,
  submenu: [
    {
      id: menuResources.ids.userPanelHome,
      label: menuResources.labels.userPanelHome,
    },
    {
      id: menuResources.ids.changePassword,
      label: menuResources.labels.changePassword,
    },
    {
      id: menuResources.ids.logout,
      label: menuResources.labels.logout,
    },
  ],
});

// User panel company menu
appMenu.push({
  id: menuResources.ids.company,
  label: menuResources.labels.company,
  submenu: [
    {
      id: menuResources.ids.managePreferences,
      label: menuResources.labels.managePreferences,
    },
    { type: menuResources.types.separator },
    {
      id: menuResources.ids.manageAreas,
      label: menuResources.labels.manageAreas,
    },
    { type: menuResources.types.separator },
    {
      id: menuResources.ids.manageWarrantyNotes,
      label: menuResources.labels.manageWarrantyNotes,
    },
  ],
});

// Customers menu
appMenu.push({
  id: menuResources.ids.customers,
  label: menuResources.labels.customers,
  submenu: [
    {
      id: menuResources.ids.manageCustomers,
      label: menuResources.labels.manageCustomers,
    },
  ],
});

// Salesmen menu
appMenu.push({
  id: menuResources.ids.salesmen,
  label: menuResources.labels.salesmen,
  submenu: [
    {
      id: menuResources.ids.manageSalesmen,
      label: menuResources.labels.manageSalesmen,
    },
  ],
});

// Products menu
appMenu.push({
  id: menuResources.ids.products,
  label: menuResources.labels.products,
  submenu: [
    {
      id: menuResources.ids.manageProducts,
      label: menuResources.labels.manageProducts,
    },
    { type: menuResources.types.separator },
    {
      id: menuResources.ids.manageProductBatches,
      label: menuResources.labels.manageProductBatches,
    },
    {
      id: menuResources.ids.manageProductCustomerPrices,
      label: menuResources.labels.manageProductCustomerPrices,
    },
  ],
});

// Invoice menu
appMenu.push({
  id: menuResources.ids.invoice,
  label: menuResources.labels.invoice,
  submenu: [
    {
      id: menuResources.ids.makeInvoice,
      label: menuResources.labels.makeInvoice,
    },
    {
      id: menuResources.ids.invoiceRecord,
      label: menuResources.labels.invoiceRecord,
    },
  ],
});

// Payments menu
appMenu.push({
  id: menuResources.ids.payments,
  label: menuResources.labels.payments,
  submenu: [
    {
      id: menuResources.ids.manageCustomerPayments,
      label: menuResources.labels.manageCustomerPayments,
    },
  ],
});

// Reports menu
appMenu.push({
  id: menuResources.ids.reports,
  label: menuResources.labels.reports,
  submenu: [
    {
      id: menuResources.ids.saleAndStockReport,
      label: menuResources.labels.saleAndStockReport,
    },
    {
      id: menuResources.ids.customerLedgerReport,
      label: menuResources.labels.customerLedgerReport,
    },
  ],
});

// Support menu
appMenu.push({
  id: menuResources.ids.support,
  label: menuResources.labels.support,
  submenu: [
    {
      id: menuResources.ids.about,
      label: menuResources.labels.about,
      role: menuResources.roles.about,
    },
    {
      id: menuResources.ids.devTools,
      label: menuResources.labels.devTools,
      role: menuResources.roles.devTools,
    },
  ],
});

module.exports = {
  appMenu: appMenu,
};
