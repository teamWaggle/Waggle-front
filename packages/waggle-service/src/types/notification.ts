import type { CommonResponseBaseType } from "@/types/common";
import type { MemberType } from "@/types/auth";

export interface NotificationType extends CommonResponseBaseType {
  result: NotificationResultType;
}

export interface NotificationResultType {
  notificationList: NotificationListType[];
}

export interface NotificationListType {
  notificationId: number;
  targetId: number;
  receiverId: number;
  sender: MemberType;
  notificationType: string;
  read: boolean;
}
