export const getIconByRouteName = (name) => {
  switch ( name ) {
    case 'Home':
      return 'home-outline';
    case 'Tasks':
      return 'note-edit-outline';
    default:
      return '';
  }
};
