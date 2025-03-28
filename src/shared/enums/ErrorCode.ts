export enum EmoneyCustomErrorCode {
    TemporaryNotAvailable = -100,
    InternalError = -1,
    SessionExpired = 0,
    AccessTokenError = 1,
    IncorrectAccessToken = 2,
    EmoneyBindingNotExists = 3,
    WrongApplication = 4,
    WrongUserPassword = 5,
    BindingExists = 6,
    ErrorValidatingNickname = 7,
    WrongBinding = 8,
    BindingError = 9,
    VirtualCardNotExists = 10,
    NoVirtualCardAccount = 11,
    NoValidTransferType = 12,
    AccountNotFound = 13,
    RateNotFound = 14,
    ConvertationError = 15,
    BalanseError = 16,
    TransferError = 17,
    WrongUser = 18,
    InvalidRequestParams = 19,
    InvalidClientIP = 20,
    UserNotFound = 21,
    InvalidSession = 22,
    UserAlreadyRegistered = 23,
    DataNotFound = 24,
    InsufficientFunds = 25,
    ApplicationIDNotFound = 26,
    GenerationTimeLimit = 27,
    LibertypayUnknownScope = 28,
    LibertypayCantAddTransaction = 29,
    LibertypayTransactionStatusIsWrong = 30,
    LibertypayCardLimitExceeded = 31,
    LibertypaySuspiciousCardIsUsed = 32,
    DBError = 33,
    EmoneyBindingDifferent = 34,
    InternalAccessTokenError = 35,
    UsernameExists = 36,
    MailNotSent = 37,
    ErrorSmartiviGetUserInfo = 38,
    ErrorCardNotValid = 39,
    ErrorSmartiviMobileCheck = 40,
    ErrorSmartiviEmailCheck = 41,
    ErrorEmoneyBlocked = 42,
    ErrorEmoneySmartiviCheck = 43,
    ErrorPIDNotCompared = 44,
    PasswordConfirmationRequired = 45,
    NewPasswordRequired = 46,
    ServiceProviderNotFound = 47,
    eMoneyUserNotFound = 48,
    UserInactive = 49,
    AmountNotInRange = 50,
    WrongFormat = 51,
    DuplicateEmail = 52,
    ProhibitedEmailDomain = 53,
    eMoneyUserNotVerified = 54,
    eMoneyUserMoneyLimitExceeded = 55,
    CardProblemWithCardID = 56,
    CardProblemAddingRecurrentTransaction = 57,
    CardProblemGettingMerchantID = 58,
    MifareCardExists = 59,
    UserAliasExsistForOtherUser = 60,
    MifareBindingNotAllow = 61,
    MobileAllreadyUsed = 62,
    InvalidMobile = 63,
    PaythruLimitExceeded = 64,
    WrongApprovalCode = 65,
    WrongIPFormat = 66,
    IPNotAllowed = 67,
    SMSExpired = 68,
    SMSWrong = 69,
    RetryLimitExceeded = 70,
    SimplePassword = 71,
    ErrorPrivateIDIsNotCorrectFormat = 72,
    ErrorMobileIsNotCorrectFormat = 73,
    ErrorMobileIsNotVerified = 74,
    MifareCardNotFound = 75,
    ChangeUserPermissionNotAllowed = 76,
    DailyMaxExceeded = 77,
    HoldDayLimit = 78,
    WrongUserPriority = 79,
    TransactionStatusError = 80,
    OutOfDate = 81,
    UpdateNotAllowed = 82,
    PermissionNotAllowed = 83,
    PaymentAlreadyApproved = 84,
    DiffernetUser = 85,
    TaxCodeExists = 86,
    UserIsAlreadyVerified = 87,
    CheckIsIncorrect = 88,
    TransferNotFound = 89,
    ContactSupportTeam = 90,
    CardCreditProblem = 91,
    OrderCreatingProblem = 92,
    PasswordWasAlreadySet = 93,
    NeedSpecialPassword = 94,
    TooManyRequests = 95,
    ProviderError = 96,
    PrivateIDRequiredError = 97,
    CustomErrorMessageFromProvider = 98,
    RetryOperation = 99,
    ExpiredCard = 100,
    IncorrectPIN = 101,
    LostOrStolenCard = 103,
    Restricted = 104,
    UnableToAuthorize = 105,
    LimitExceeded = 106,
    CardNotSupported = 107,
    InvalidCardDetails = 108,
    LinkingExpired = 109,
    Canceled = 110,
    Declined = 111,
    OrderNotFound = 113,
    Duplication = 114,
    ProblematicTransaction = 115,
    ExchangeForCurrenciesNotDefined = 116,
    Timeout = 117,
    AccountIsLocked = 118,
    AccountIsLockedKyc = 119,
    AccountNotWhitelisted = 120,
    CardAlreadyLinked = 121,
    // CantCreateBinanceOrder = 121,
    InsufficientAmount = -76
}

export enum ErrorCode {
    Unauthorized = 401,
    NotAcceptable = 406,
    BadGateway = 502
}