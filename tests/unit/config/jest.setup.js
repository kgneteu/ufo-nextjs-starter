import '@testing-library/jest-dom/extend-expect';
// global.ResizeObserver = jest.fn().mockImplementation(() => ({
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//     disconnect: jest.fn(),
// }))
import * as nextRouter from 'next/router';
//
// global.ResizeObserver = require('resize-observer-polyfill')
//
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
//
// self.__NEXT_DATA__ = {};
