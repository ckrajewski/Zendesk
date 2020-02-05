export const areSubscriptionsEqual = (savedSubscription, previewSubscription) => {
  debugger;
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
