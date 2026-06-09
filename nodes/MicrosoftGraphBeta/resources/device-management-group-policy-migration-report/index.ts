import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyMigrationReportDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Migration Reports",
					"value": "Device Management List Group Policy Migration Reports",
					"action": "Get groupPolicyMigrationReports from deviceManagement",
					"description": "A list of Group Policy migration reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Migration Reports",
					"value": "Device Management Create Group Policy Migration Reports",
					"action": "Create new navigation property to groupPolicyMigrationReports for deviceManagement",
					"description": "Create new navigation property to groupPolicyMigrationReports for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyMigrationReports"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Migration Reports",
					"value": "Device Management Delete Group Policy Migration Reports",
					"action": "Delete navigation property groupPolicyMigrationReports for deviceManagement",
					"description": "Delete navigation property groupPolicyMigrationReports for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Migration Reports",
					"value": "Device Management Get Group Policy Migration Reports",
					"action": "Get groupPolicyMigrationReports from deviceManagement",
					"description": "A list of Group Policy migration reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Migration Reports",
					"value": "Device Management Update Group Policy Migration Reports",
					"action": "Update the navigation property groupPolicyMigrationReports in deviceManagement",
					"description": "Update the navigation property groupPolicyMigrationReports in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports List Group Policy Setting Mappings",
					"value": "Device Management Group Policy Migration Reports List Group Policy Setting Mappings",
					"action": "Get groupPolicySettingMappings from deviceManagement",
					"description": "A list of group policy settings to MDM/Intune mappings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/groupPolicySettingMappings"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Create Group Policy Setting Mappings",
					"value": "Device Management Group Policy Migration Reports Create Group Policy Setting Mappings",
					"action": "Create new navigation property to groupPolicySettingMappings for deviceManagement",
					"description": "Create new navigation property to groupPolicySettingMappings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/groupPolicySettingMappings"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Delete Group Policy Setting Mappings",
					"value": "Device Management Group Policy Migration Reports Delete Group Policy Setting Mappings",
					"action": "Delete navigation property groupPolicySettingMappings for deviceManagement",
					"description": "Delete navigation property groupPolicySettingMappings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/groupPolicySettingMappings/{{$parameter[\"groupPolicySettingMapping-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Get Group Policy Setting Mappings",
					"value": "Device Management Group Policy Migration Reports Get Group Policy Setting Mappings",
					"action": "Get groupPolicySettingMappings from deviceManagement",
					"description": "A list of group policy settings to MDM/Intune mappings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/groupPolicySettingMappings/{{$parameter[\"groupPolicySettingMapping-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Update Group Policy Setting Mappings",
					"value": "Device Management Group Policy Migration Reports Update Group Policy Setting Mappings",
					"action": "Update the navigation property groupPolicySettingMappings in deviceManagement",
					"description": "Update the navigation property groupPolicySettingMappings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/groupPolicySettingMappings/{{$parameter[\"groupPolicySettingMapping-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions",
					"value": "Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions",
					"action": "Get unsupportedGroupPolicyExtensions from deviceManagement",
					"description": "A list of unsupported group policy extensions inside the Group Policy Object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/unsupportedGroupPolicyExtensions"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Create Unsupported Group Policy Extensions",
					"value": "Device Management Group Policy Migration Reports Create Unsupported Group Policy Extensions",
					"action": "Create new navigation property to unsupportedGroupPolicyExtensions for deviceManagement",
					"description": "Create new navigation property to unsupportedGroupPolicyExtensions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/unsupportedGroupPolicyExtensions"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Delete Unsupported Group Policy Extensions",
					"value": "Device Management Group Policy Migration Reports Delete Unsupported Group Policy Extensions",
					"action": "Delete navigation property unsupportedGroupPolicyExtensions for deviceManagement",
					"description": "Delete navigation property unsupportedGroupPolicyExtensions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/unsupportedGroupPolicyExtensions/{{$parameter[\"unsupportedGroupPolicyExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Get Unsupported Group Policy Extensions",
					"value": "Device Management Group Policy Migration Reports Get Unsupported Group Policy Extensions",
					"action": "Get unsupportedGroupPolicyExtensions from deviceManagement",
					"description": "A list of unsupported group policy extensions inside the Group Policy Object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/unsupportedGroupPolicyExtensions/{{$parameter[\"unsupportedGroupPolicyExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Update Unsupported Group Policy Extensions",
					"value": "Device Management Group Policy Migration Reports Update Unsupported Group Policy Extensions",
					"action": "Update the navigation property unsupportedGroupPolicyExtensions in deviceManagement",
					"description": "Update the navigation property unsupportedGroupPolicyExtensions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/unsupportedGroupPolicyExtensions/{{$parameter[\"unsupportedGroupPolicyExtension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management List Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Create Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Create Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Delete Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Delete Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Get Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Get Group Policy Migration Reports"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Get Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Update Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Update Group Policy Migration Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Delete Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Delete Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Group Policy Setting Mappings"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Update Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Update Group Policy Setting Mappings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports List Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Delete Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Delete Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Unsupported Group Policy Extensions"
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
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Get Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Update Unsupported Group Policy Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Migration Report"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Update Unsupported Group Policy Extensions"
					]
				}
			}
		},
];
