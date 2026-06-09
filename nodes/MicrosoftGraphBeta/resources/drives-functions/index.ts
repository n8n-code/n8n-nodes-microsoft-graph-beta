import type { INodeProperties } from 'n8n-workflow';

export const drivesFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					]
				}
			},
			"options": [
				{
					"name": "Drives Drive Items Drive Item Delta 90 Ce",
					"value": "Drives Drive Items Drive Item Delta 90 Ce",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Delta 20 B 8",
					"value": "Drives Drive Items Drive Item Delta 20 B 8",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.delta(token='{{$parameter[\"token\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Get Activities By Interval",
					"value": "Drives Drive Items Drive Item Get Activities By Interval",
					"action": "Invoke function getActivitiesByInterval",
					"description": "Invoke function getActivitiesByInterval",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.getActivitiesByInterval(startDateTime='{{$parameter[\"startDateTime\"]}}',endDateTime='{{$parameter[\"endDateTime\"]}}',interval='{{$parameter[\"interval\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Search",
					"value": "Drives Drive Items Drive Item Search",
					"action": "Invoke function search",
					"description": "Invoke function search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.search(q='{{$parameter[\"q\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Session Info Resource",
					"value": "Drives Drive Items Drive Item Workbook Session Info Resource",
					"action": "Invoke function sessionInfoResource",
					"description": "Invoke function sessionInfoResource",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/microsoft.graph.sessionInfoResource(key='{{$parameter[\"key\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Table Row Operation Result",
					"value": "Drives Drive Items Drive Item Workbook Table Row Operation Result",
					"action": "Invoke function tableRowOperationResult",
					"description": "Invoke function tableRowOperationResult",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/microsoft.graph.tableRowOperationResult(key='{{$parameter[\"key\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Names Workbook Named Item Range",
					"value": "Drives Drive Items Drive Item Workbook Names Workbook Named Item Range",
					"action": "Invoke function range",
					"description": "Retrieve the properties and relationships of range object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/{{$parameter[\"workbookNamedItem-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Count",
					"value": "Drives Drive Items Drive Item Workbook Tables Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Item At",
					"value": "Drives Drive Items Drive Item Workbook Tables Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Count",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Item At",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Data Body Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Data Body Range",
					"action": "Invoke function dataBodyRange",
					"description": "Gets the range object associated with the data body of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.dataBodyRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Header Row Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Header Row Range",
					"action": "Invoke function headerRowRange",
					"description": "Gets the range object associated with the header row of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.headerRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Range",
					"action": "Invoke function range",
					"description": "Gets the range object associated with the entire column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Total Row Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Total Row Range",
					"action": "Invoke function totalRowRange",
					"description": "Gets the range object associated with the totals row of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.totalRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Data Body Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Data Body Range",
					"action": "Invoke function dataBodyRange",
					"description": "Gets the range object associated with the data body of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.dataBodyRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Header Row Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Header Row Range",
					"action": "Invoke function headerRowRange",
					"description": "Gets the range object associated with header row of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.headerRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Range",
					"action": "Invoke function range",
					"description": "Gets the range object associated with the entire table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Total Row Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Total Row Range",
					"action": "Invoke function totalRowRange",
					"description": "Gets the range object associated with totals row of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.totalRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Count",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Item At",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Workbook Table Row Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Workbook Table Row Range",
					"action": "Invoke function range",
					"description": "Returns the range object associated with the entire row.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item",
					"action": "Invoke function item",
					"description": "Invoke function item",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/microsoft.graph.item(name='{{$parameter[\"name\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 9 D 93",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 9 D 93",
					"action": "Invoke function image",
					"description": "Invoke function image",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.image()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image E 058",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image E 058",
					"action": "Invoke function image",
					"description": "Invoke function image",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.image(width={{$parameter[\"width\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 6 D 93",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 6 D 93",
					"action": "Invoke function image",
					"description": "Invoke function image",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.image(width={{$parameter[\"width\"]}},height={{$parameter[\"height\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A",
					"action": "Invoke function image",
					"description": "Invoke function image",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.image(width={{$parameter[\"width\"]}},height={{$parameter[\"height\"]}},fittingMode='{{$parameter[\"fittingMode\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Cell",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Cell",
					"action": "Invoke function cell",
					"description": "Invoke function cell",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/microsoft.graph.cell(row={{$parameter[\"row\"]}},column={{$parameter[\"column\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 0 E 4 A",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 0 E 4 A",
					"action": "Invoke function range",
					"description": "Invoke function range",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 73 Ff",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 73 Ff",
					"action": "Invoke function range",
					"description": "Invoke function range",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/microsoft.graph.range(address='{{$parameter[\"address\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range Ec 2 C",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range Ec 2 C",
					"action": "Invoke function usedRange",
					"description": "Invoke function usedRange",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/microsoft.graph.usedRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range 206 D",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range 206 D",
					"action": "Invoke function usedRange",
					"description": "Invoke function usedRange",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/microsoft.graph.usedRange(valuesOnly={{$parameter[\"valuesOnly\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Workbook Named Item Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Workbook Named Item Range",
					"action": "Invoke function range",
					"description": "Retrieve the properties and relationships of range object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/{{$parameter[\"workbookNamedItem-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Data Body Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Data Body Range",
					"action": "Invoke function dataBodyRange",
					"description": "Gets the range object associated with the data body of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.dataBodyRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Header Row Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Header Row Range",
					"action": "Invoke function headerRowRange",
					"description": "Gets the range object associated with the header row of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.headerRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Range",
					"action": "Invoke function range",
					"description": "Gets the range object associated with the entire column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Total Row Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Total Row Range",
					"action": "Invoke function totalRowRange",
					"description": "Gets the range object associated with the totals row of the column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/microsoft.graph.totalRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Data Body Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Data Body Range",
					"action": "Invoke function dataBodyRange",
					"description": "Gets the range object associated with the data body of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.dataBodyRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Header Row Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Header Row Range",
					"action": "Invoke function headerRowRange",
					"description": "Gets the range object associated with header row of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.headerRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Range",
					"action": "Invoke function range",
					"description": "Gets the range object associated with the entire table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Total Row Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Total Row Range",
					"action": "Invoke function totalRowRange",
					"description": "Gets the range object associated with totals row of the table.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.totalRowRange()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Count",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Count",
					"action": "Invoke function count",
					"description": "Invoke function count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.count()"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Item At",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Item At",
					"action": "Invoke function itemAt",
					"description": "Invoke function itemAt",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.itemAt(index={{$parameter[\"index\"]}})"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Workbook Table Row Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Workbook Table Row Range",
					"action": "Invoke function range",
					"description": "Returns the range object associated with the entire row.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}/microsoft.graph.range()"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Get Compatible Hub Content Types",
					"value": "Drives Drive List Content Types Get Compatible Hub Content Types",
					"action": "Invoke function getCompatibleHubContentTypes",
					"description": "Invoke function getCompatibleHubContentTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/microsoft.graph.getCompatibleHubContentTypes()"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Content Type Is Published",
					"value": "Drives Drive List Content Types Content Type Is Published",
					"action": "Invoke function isPublished",
					"description": "Invoke function isPublished",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.isPublished()"
						}
					}
				},
				{
					"name": "Drives Drive List Items Delta",
					"value": "Drives Drive List Items Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "GET Drives List Items Microsoft Graph Delta Token Token",
					"value": "GET Drives List Items Microsoft Graph Delta Token Token",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/microsoft.graph.delta(token='{{$parameter[\"token\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive List Items List Item Get Activities By Interval",
					"value": "Drives Drive List Items List Item Get Activities By Interval",
					"action": "Invoke function getActivitiesByInterval",
					"description": "Invoke function getActivitiesByInterval",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.getActivitiesByInterval(startDateTime='{{$parameter[\"startDateTime\"]}}',endDateTime='{{$parameter[\"endDateTime\"]}}',interval='{{$parameter[\"interval\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Recent",
					"value": "Drives Drive Recent",
					"action": "Invoke function recent",
					"description": "Invoke function recent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/microsoft.graph.recent()"
						}
					}
				},
				{
					"name": "Drives Drive Search",
					"value": "Drives Drive Search",
					"action": "Invoke function search",
					"description": "Invoke function search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/microsoft.graph.search(q='{{$parameter[\"q\"]}}')"
						}
					}
				},
				{
					"name": "Drives Drive Shared With Me",
					"value": "Drives Drive Shared With Me",
					"action": "Invoke function sharedWithMe",
					"description": "Invoke function sharedWithMe",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/microsoft.graph.sharedWithMe()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 90 Ce"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.delta(token='{token}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "Usage: token='{token}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Delta 20 B 8"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime='{startDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime='{endDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "Usage: interval='{interval}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.search(q='{q}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"required": true,
			"description": "Usage: q='{q}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Search"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/microsoft.graph.sessionInfoResource(key='{key}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Session Info Resource"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "Usage: key='{key}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Session Info Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/microsoft.graph.tableRowOperationResult(key='{key}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Table Row Operation Result"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "Usage: key='{key}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Table Row Operation Result"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Workbook Named Item Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.dataBodyRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Data Body Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.headerRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Header Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.totalRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Total Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.dataBodyRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Data Body Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.headerRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Header Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.totalRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Total Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Workbook Table Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/microsoft.graph.item(name='{name}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "Usage: name='{name}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 9 D 93"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image E 058"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"required": true,
			"description": "Usage: width={width}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image E 058"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width},height={height})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 6 D 93"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"required": true,
			"description": "Usage: width={width}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 6 D 93"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"required": true,
			"description": "Usage: height={height}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 6 D 93"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width},height={height},fittingMode='{fittingMode}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"required": true,
			"description": "Usage: width={width}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"required": true,
			"description": "Usage: height={height}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A"
					]
				}
			}
		},
		{
			"displayName": "Fitting Mode",
			"name": "fittingMode",
			"required": true,
			"description": "Usage: fittingMode='{fittingMode}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Image 881 A"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/microsoft.graph.cell(row={row},column={column})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Cell"
					]
				}
			}
		},
		{
			"displayName": "Row",
			"name": "row",
			"required": true,
			"description": "Usage: row={row}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Cell"
					]
				}
			}
		},
		{
			"displayName": "Column",
			"name": "column",
			"required": true,
			"description": "Usage: column={column}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Cell"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 0 E 4 A"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/microsoft.graph.range(address='{address}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 73 Ff"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"description": "Usage: address='{address}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Range 73 Ff"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/microsoft.graph.usedRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range Ec 2 C"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/microsoft.graph.usedRange(valuesOnly={valuesOnly})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range 206 D"
					]
				}
			}
		},
		{
			"displayName": "Values Only",
			"name": "valuesOnly",
			"required": true,
			"description": "Usage: valuesOnly={valuesOnly}",
			"default": false,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Used Range 206 D"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Workbook Named Item Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.dataBodyRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Data Body Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.headerRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Header Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/microsoft.graph.totalRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Total Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.dataBodyRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Data Body Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.headerRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Header Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.totalRowRange()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Total Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/microsoft.graph.count()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Count"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/microsoft.graph.itemAt(index={index})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Item At"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"description": "Usage: index={index}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Item At"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/{workbookTableRow-id}/microsoft.graph.range()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Workbook Table Row Range"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/microsoft.graph.getCompatibleHubContentTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/microsoft.graph.isPublished()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Is Published"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/microsoft.graph.delta(token='{token}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "Usage: token='{token}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"GET Drives List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime='{startDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime='{endDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "Usage: interval='{interval}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/microsoft.graph.recent()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Recent"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/microsoft.graph.search(q='{q}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"required": true,
			"description": "Usage: q='{q}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Search"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/microsoft.graph.sharedWithMe()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Functions"
					],
					"operation": [
						"Drives Drive Shared With Me"
					]
				}
			}
		},
];
