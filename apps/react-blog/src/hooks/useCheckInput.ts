const useCheckInput = () => {
  const checkNull = (str: string) => {
    if (!str) {
      return "null";
    }

    return "valid";
  };

  const checkSpace = (str: string) => {
    if (!str) {
      return "null";
    }

    return str.includes(" ") ? "space" : "valid";
  };

  const checkWeakAndSpace = (str: string, weakLength: number) => {
    if (!str) {
      return "null";
    }

    if (str.length < weakLength) {
      return "weak";
    }

    return checkSpace(str);
  };

  const checkMaxAndSpace = (str: string, maxLength: number) => {
    if (!str) {
      return "null";
    }

    if (str.length > maxLength) {
      return "max";
    }

    return checkSpace(str);
  };

  const checkPasswordConfirm = (str: string, compare: string) => {
    if (!str) {
      return "null";
    }

    if (str !== compare) {
      return "incorrect";
    }

    return "valid";
  };

  return {
    checkNull,
    checkSpace,
    checkWeakAndSpace,
    checkMaxAndSpace,
    checkPasswordConfirm,
  };
};

export default useCheckInput;
