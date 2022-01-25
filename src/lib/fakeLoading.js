const fakeLoading = (loading, loadingSuccess) => {
  loading();

  setTimeout(
    () => loadingSuccess(),
    2500
  );
};

export default fakeLoading;