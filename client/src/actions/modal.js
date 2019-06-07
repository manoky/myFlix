export const types = {
  SHOWMODAL: 'SHOWMODAL',
  HIDEMODAL: 'HIDEMODAL'
}

export const showModal = () => ({
  type: types.SHOWMODAL
});

export const hideModal = () => ({
  type: types.HIDEMODAL
});