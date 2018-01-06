/**
 * Created by liutiantian on 2017/7/6.
 */

/**
 * check whether two objects is equal.
 * @param left one object
 * @param right other object
 * @returns {boolean} true if equal, otherwise false.
 */
function smartEqual(left, right) {
    if (left === right) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    if (left === undefined || right === undefined) {
        return false;
    }
    let keys = [];
    for (let key in left) {
        if (left.hasOwnProperty(key)) {
            keys.push(key);
            if (right.hasOwnProperty(key)) {
                if (typeof left[key] === typeof right[key]) {
                    if (typeof left[key] === 'object') {
                        if (!smartEqual(left[key], right[key])) {
                            return false;
                        }
                        continue;
                    }
                    else if (typeof left[key] === 'function') {
                        if (left[key].toString() === right[key].toString()) {
                            continue;
                        }
                        return false;
                    }
                    else if (left[key] !== right[key]) {
                        return false;
                    }
                    continue;
                }
                return false;
            }
            else {
                return false;
            }
        }
        else if (right.hasOwnProperty(key)) {
            return false;
        }
    }
    for (let key in right) {
        if (right.hasOwnProperty(key)) {
            if (keys.indexOf(key) < 0) {
                return false;
            }
        }
    }
    return true;
}

export default smartEqual;
