export interface DefaultApiResponseType<T> {
	isSuccess: boolean;
	code: number;
	message: string;
	result: T;
}
