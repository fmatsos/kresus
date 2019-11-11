"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOperations = exports.fetchAccounts = exports.SOURCE_NAME = void 0;

var _accountTypes = require("../account-types");

var _helpers = require("../../helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const SOURCE_NAME = 'manual';
exports.SOURCE_NAME = SOURCE_NAME;

const fetchAccounts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* () {
    const manualAccountLabel = (0, _helpers.translate)('server.banks.manual_account');
    const unknownTypeId = (0, _accountTypes.accountTypeNameToId)('account-type.unknown');
    return [{
      vendorAccountId: '1',
      label: `${manualAccountLabel} #1 (EUR)`,
      balance: 0,
      currency: 'EUR',
      type: unknownTypeId
    }, {
      vendorAccountId: '2',
      label: `${manualAccountLabel} #2 (EUR)`,
      balance: 0,
      currency: 'EUR',
      type: unknownTypeId
    }, {
      vendorAccountId: '3',
      label: `${manualAccountLabel} #3 (USD)`,
      balance: 0,
      currency: 'USD',
      type: unknownTypeId
    }];
  });

  return function fetchAccounts() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchAccounts = fetchAccounts;

const fetchOperations = () => {
  return new Promise(accept => {
    accept([]);
  });
};

exports.fetchOperations = fetchOperations;