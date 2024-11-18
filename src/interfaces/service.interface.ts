export interface ApiResponseError {
  data: null;
  notifications: Notification[];
  service?: string;
}

export interface Notification {
  code: string | number;
  message: string;
  severity: string | null;
  category: string | null;
  description: string | null;
  action: string | null;
  metadata: Record<string, any>;
  uuid: string;
  timestamp: string;
  field_name: string | null;
}
