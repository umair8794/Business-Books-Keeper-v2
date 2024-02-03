module.exports = function (id, label, role) {
  const menuItem = {
    id,
    label,
  };

  if (role) {
    menuItem.role = role;
  }

  return menuItem;
};
