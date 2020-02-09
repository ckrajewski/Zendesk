export const areSubscriptionsEqual = (savedSubscription, previewSubscription) => {
  const previewSubsciptionKeys = Object.keys(previewSubscription);
  for (const index in previewSubsciptionKeys) {
    const key = previewSubsciptionKeys[index];
    if (previewSubscription[key] !== savedSubscription[key]) {
      return false;
    }
  }
  return true;
};
export const isEmptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object;

export const buttonStyling = {
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  cursor: 'pointer',
  lineHeight: 1.5,
  color: 'white',
  backgroundColor: '#26c6da',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#80deea',
    borderColor: '#80deea',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0097a7',
    borderColor: '#0097a7',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
};
