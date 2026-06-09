import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Reports",
					"value": "Device Management Delete Reports",
					"action": "Delete navigation property reports for deviceManagement",
					"description": "Delete navigation property reports for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reports"
						}
					}
				},
				{
					"name": "Device Management Get Reports",
					"value": "Device Management Get Reports",
					"action": "Get reports from deviceManagement",
					"description": "Reports singleton",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reports"
						}
					}
				},
				{
					"name": "Device Management Update Reports",
					"value": "Device Management Update Reports",
					"action": "Update the navigation property reports in deviceManagement",
					"description": "Update the navigation property reports in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reports"
						}
					}
				},
				{
					"name": "Device Management Reports List Cached Report Configurations",
					"value": "Device Management Reports List Cached Report Configurations",
					"action": "Get cachedReportConfigurations from deviceManagement",
					"description": "Entity representing the configuration of a cached report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reports/cachedReportConfigurations"
						}
					}
				},
				{
					"name": "Device Management Reports Create Cached Report Configurations",
					"value": "Device Management Reports Create Cached Report Configurations",
					"action": "Create new navigation property to cachedReportConfigurations for deviceManagement",
					"description": "Create new navigation property to cachedReportConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/cachedReportConfigurations"
						}
					}
				},
				{
					"name": "Device Management Reports Delete Cached Report Configurations",
					"value": "Device Management Reports Delete Cached Report Configurations",
					"action": "Delete navigation property cachedReportConfigurations for deviceManagement",
					"description": "Delete navigation property cachedReportConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reports/cachedReportConfigurations/{{$parameter[\"deviceManagementCachedReportConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reports Get Cached Report Configurations",
					"value": "Device Management Reports Get Cached Report Configurations",
					"action": "Get cachedReportConfigurations from deviceManagement",
					"description": "Entity representing the configuration of a cached report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reports/cachedReportConfigurations/{{$parameter[\"deviceManagementCachedReportConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reports Update Cached Report Configurations",
					"value": "Device Management Reports Update Cached Report Configurations",
					"action": "Update the navigation property cachedReportConfigurations in deviceManagement",
					"description": "Update the navigation property cachedReportConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reports/cachedReportConfigurations/{{$parameter[\"deviceManagementCachedReportConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reports List Export Jobs",
					"value": "Device Management Reports List Export Jobs",
					"action": "Get exportJobs from deviceManagement",
					"description": "Entity representing a job to export a report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reports/exportJobs"
						}
					}
				},
				{
					"name": "Device Management Reports Create Export Jobs",
					"value": "Device Management Reports Create Export Jobs",
					"action": "Create new navigation property to exportJobs for deviceManagement",
					"description": "Create new navigation property to exportJobs for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/exportJobs"
						}
					}
				},
				{
					"name": "Device Management Reports Delete Export Jobs",
					"value": "Device Management Reports Delete Export Jobs",
					"action": "Delete navigation property exportJobs for deviceManagement",
					"description": "Delete navigation property exportJobs for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reports/exportJobs/{{$parameter[\"deviceManagementExportJob-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reports Get Export Jobs",
					"value": "Device Management Reports Get Export Jobs",
					"action": "Get exportJobs from deviceManagement",
					"description": "Entity representing a job to export a report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reports/exportJobs/{{$parameter[\"deviceManagementExportJob-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reports Update Export Jobs",
					"value": "Device Management Reports Update Export Jobs",
					"action": "Update the navigation property exportJobs in deviceManagement",
					"description": "Update the navigation property exportJobs in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reports/exportJobs/{{$parameter[\"deviceManagementExportJob-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Delete Reports"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Delete Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Get Reports"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Get Reports"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Get Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Update Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Update Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reports/cachedReportConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/cachedReportConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Create Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/cachedReportConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Create Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Delete Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Delete Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Cached Report Configurations"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Update Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Update Cached Report Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reports/exportJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports List Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/exportJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Create Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/exportJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Create Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Delete Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Delete Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Export Jobs"
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
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Get Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Update Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reports"
					],
					"operation": [
						"Device Management Reports Update Export Jobs"
					]
				}
			}
		},
];
