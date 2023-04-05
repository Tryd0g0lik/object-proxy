import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
jest.mock('../http');

beforeEach(() => {
	jest.resetAllMocks();
});

test('should call loadUser once', () => {
	httpGet.mockReturnValue(JSON.stringify({}));

	const response = loadUser(1);
	expect(response).toEqual({});
	expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('saveUser function will teste for an error', () => {
	const testeBasicFun = () => {
		saveUser('Mean');
	};

	expect(testeBasicFun).toThrow();
});
