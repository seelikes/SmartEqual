/**
 * Created by liutiantian on 2017/7/6.
 */

'use strict';

import smartEqual from '../lib/index';

describe('smartEqual', () => {
    console.log("smartEqual, enter.");

    let data = 'data';

    test('Complicated Equal!', () => {
        let a = {
            a1: 'a1',
            a2: 2,
            a3: true,
            a4: () => {
                return data;
            },
            a5: {
                a51: function () {
                    return data;
                }
            }
        };

        let b = {
            a1: 'a1',
            a2: 2,
            a3: true,
            a4: () => {
                return data;
            },
            a5: {
                a51: function () {
                    return data;
                }
            }
        };

        expect(a === b).toBe(false);
        expect(smartEqual(a, b)).toBe(true);
    });
});
