export const getOTPCountdown = (expiresAt: Date) => {
  const now = new Date();
  const diff = expiresAt.getTime() - now.getTime();

  if (diff <= 0) {
    return { minutes: 0, seconds: 0, isExpired: true };
  }

  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { minutes, seconds, isExpired: false };
};

export const formatCountdown = (minutes: number, seconds: number) => {
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
