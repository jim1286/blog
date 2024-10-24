const useCheckInput = () => {
  const checkSpace = (str: string) => {
    if (!str) {
      return 'null';
    }

    return str.includes(' ') ? 'space' : 'valid';
  };

  const checkPassword = (str: string) => {
    if (!str) {
      return 'null';
    }

    if (str.length < 6) {
      return 'weak';
    }

    return checkSpace(str);
  };

  const checkPasswordConfirm = (str: string, compare: string) => {
    if (!str) {
      return 'null';
    }

    if (str !== compare) {
      return 'incorrect';
    }

    return 'valid';
  };

  return { checkSpace, checkPassword, checkPasswordConfirm };
};

export default useCheckInput;
