interface actionType {
	type: string;
	payload?: string;
}

interface findEmailStateType {
	year: boolean;
	month: boolean;
	day: boolean;
	yearSelect: boolean;
	monthSelect: boolean;
	daySelect: boolean;
	yearText: string | undefined;
	monthText: string | undefined;
	dayText: string | undefined;
}

export const findEmailInitialState = {
	year: false,
	month: false,
	day: false,
	yearSelect: false,
	monthSelect: false,
	daySelect: false,
	yearText: "생년",
	monthText: "월 선택",
	dayText: "일 선택",
};

export const findEmailReducer = (
	state: findEmailStateType,
	action: actionType,
): findEmailStateType => {
	switch (action.type) {
		case "CHANGE_YEAR_OPTION":
			return {
				...state,
				year: !state.year,
			};
		case "CHANGE_MONTH_OPTION":
			return {
				...state,
				month: !state.month,
			};
		case "CHANGE_DAY_OPTION":
			return {
				...state,
				day: !state.day,
			};
		case "SELECT_YEAR":
			return {
				...state,
				yearSelect: true,
			};
		case "SELECT_MONTH":
			return {
				...state,
				monthSelect: true,
			};
		case "SELECT_DAY":
			return {
				...state,
				daySelect: true,
			};
		case "CHANGE_YEAR_TEXT":
			return {
				...state,
				yearText: action.payload,
			};
		case "CHANGE_MONTH_TEXT":
			return {
				...state,
				monthText: action.payload,
			};
		case "CHANGE_DAY_TEXT":
			return {
				...state,
				dayText: action.payload,
			};
		default:
			return state;
	}
};
