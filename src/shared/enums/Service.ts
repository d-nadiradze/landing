export enum ServiceFormFields {
    Text = "Text",
    OptionalText = "OptionalTextField",
    HiddenEmpty = "HiddenEmptyField",
    Dropdown = "List",
    HiddenDefaultValue = "HiddenFieldWithDefaultValue",
    DateTime = "DateField",
    MultiSelect = "TwoStepMultiselect",
    SingleSelect = "TwoStepSingleselect"
}

export const SECOND_STEP_FIELDS: string[] = [
    ServiceFormFields.MultiSelect,
    ServiceFormFields.SingleSelect,
]

export const FIRST_STEP_EXCLUDED_FIELDS: string[] = [
    ...SECOND_STEP_FIELDS,
    ServiceFormFields.HiddenDefaultValue,
    ServiceFormFields.HiddenEmpty
]

export const FIRST_STEP_VALIDATED_FIELD_TYPES: string[] = [
    ServiceFormFields.Text,
    ServiceFormFields.Dropdown,
    ServiceFormFields.DateTime
]

export enum ServiceStep {
    DetailsForm,
    PaymentForm
}

export const ONLY_AUTHORIZED_SERVICE_IDS = [
    1100, 1104, 1195, 1227, 1228, 1229, 1231, 1235, 1251, 1252, 1272, 1278, 1300,
    1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314,
    1315, 1316, 1317, 1318, 1320, 1321, 1322, 1323, 1324, 1327, 1328, 1329, 1330,
    1331, 1332, 1333, 1334, 1335, 1336, 1337, 1339, 1340, 1341, 1342, 1343, 1344,
    1345, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358,
    1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371,
    1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1431, 1472, 1473,
    1474, 1475, 1476, 1477, 1479, 1487, 1504, 1513, 1516, 1517, 1518, 1519, 1520,
    1521, 1522, 1524, 1525, 1526, 1527, 1529, 1530, 1531, 1534, 1546, 1549, 1558,
    1559, 1560, 1561, 1562, 1563, 1564, 1083, 1130, 1254, 1257, 1263, 1407, 1429,
    1442, 1443, 1461, 1511, 1510, 1512, 1467, 1457
]

export const EmoneyOption = {
    id: 2,
    logo: '/emoney/logo.webp',
    name: `Emoney Balance`,
    rootBalance: true,
}

export const CardOption = {
    id: 1,
    name: `Bank Card`,
    rootBalance: false,
    description: "****"
}

export const SUCCESSFULLY_REGISTERED_PAYMENT = 1
