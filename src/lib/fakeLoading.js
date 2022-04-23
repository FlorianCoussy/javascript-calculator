const fakeLoading = (loading, loadingSuccess) => {
  loading();

  setTimeout(
    () => loadingSuccess(),
    3500
  );
};

export default fakeLoading;