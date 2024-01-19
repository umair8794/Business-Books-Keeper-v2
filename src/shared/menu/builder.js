module.exports = function (id, label, role) {
  let menuItem = {
    id,
    label,
  };

  if (role) {
    menuItem.role = role;
  }

  return menuItem;
};
