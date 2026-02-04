export interface APIResponse<T> {
  data?: {
    data: T;
    message?: string;
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface OTPResult {
  expires_in_minutes: number;
  user_exists?: boolean;
}

export const authAPI = {
  sendOTP: async (data: { phone_number: string }): Promise<APIResponse<OTPResult>> => {
    // Mock implementation for now, should connect to actual backend
    console.log("Sending OTP to:", data.phone_number);
    return {
      data: {
        data: { expires_in_minutes: 5, user_exists: false },
        message: "OTP sent successfully",
      },
    };
  },

  verifyOTP: async (data: { phone_number: string; code: string }): Promise<APIResponse<{ user_exists: boolean }>> => {
    console.log("Verifying OTP for:", data.phone_number, "code:", data.code);
    return {
      data: {
        data: { user_exists: false },
        message: "OTP verified",
      },
    };
  },

  forgotPassword: async (data: { phone_number: string }): Promise<APIResponse<OTPResult>> => {
    console.log("Sending forgot password OTP to:", data.phone_number);
    return {
      data: {
        data: { expires_in_minutes: 5 },
        message: "Reset code sent",
      },
    };
  },

  resetPassword: async (data: any): Promise<APIResponse<any>> => {
    console.log("Resetting password for:", data.phone_number);
    return {
      data: {
        data: {},
        message: "Password reset successful",
      },
    };
  },
};
