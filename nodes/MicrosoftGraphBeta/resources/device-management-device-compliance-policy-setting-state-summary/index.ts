import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceCompliancePolicySettingStateSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Compliance Policy Setting State Summaries",
					"value": "Device Management List Device Compliance Policy Setting State Summaries",
					"action": "Get deviceCompliancePolicySettingStateSummaries from deviceManagement",
					"description": "The summary states of compliance policy settings for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Create Device Compliance Policy Setting State Summaries",
					"value": "Device Management Create Device Compliance Policy Setting State Summaries",
					"action": "Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement",
					"description": "Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Delete Device Compliance Policy Setting State Summaries",
					"value": "Device Management Delete Device Compliance Policy Setting State Summaries",
					"action": "Delete navigation property deviceCompliancePolicySettingStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceCompliancePolicySettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Compliance Policy Setting State Summaries",
					"value": "Device Management Get Device Compliance Policy Setting State Summaries",
					"action": "Get deviceCompliancePolicySettingStateSummaries from deviceManagement",
					"description": "The summary states of compliance policy settings for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Compliance Policy Setting State Summaries",
					"value": "Device Management Update Device Compliance Policy Setting State Summaries",
					"action": "Update the navigation property deviceCompliancePolicySettingStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceCompliancePolicySettingStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States",
					"value": "Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States",
					"action": "Get deviceComplianceSettingStates from deviceManagement",
					"description": "Not yet documented",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}/deviceComplianceSettingStates"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summaries Create Device Compliance Setting States",
					"value": "Device Management Device Compliance Policy Setting State Summaries Create Device Compliance Setting States",
					"action": "Create new navigation property to deviceComplianceSettingStates for deviceManagement",
					"description": "Create new navigation property to deviceComplianceSettingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}/deviceComplianceSettingStates"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summaries Delete Device Compliance Setting States",
					"value": "Device Management Device Compliance Policy Setting State Summaries Delete Device Compliance Setting States",
					"action": "Delete navigation property deviceComplianceSettingStates for deviceManagement",
					"description": "Delete navigation property deviceComplianceSettingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}/deviceComplianceSettingStates/{{$parameter[\"deviceComplianceSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summaries Get Device Compliance Setting States",
					"value": "Device Management Device Compliance Policy Setting State Summaries Get Device Compliance Setting States",
					"action": "Get deviceComplianceSettingStates from deviceManagement",
					"description": "Not yet documented",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}/deviceComplianceSettingStates/{{$parameter[\"deviceComplianceSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policy Setting State Summaries Update Device Compliance Setting States",
					"value": "Device Management Device Compliance Policy Setting State Summaries Update Device Compliance Setting States",
					"action": "Update the navigation property deviceComplianceSettingStates in deviceManagement",
					"description": "Update the navigation property deviceComplianceSettingStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicySettingStateSummaries/{{$parameter[\"deviceCompliancePolicySettingStateSummary-id\"]}}/deviceComplianceSettingStates/{{$parameter[\"deviceComplianceSettingState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicySettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management List Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicySettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Create Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicySettingStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Create Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Delete Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Delete Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Setting State Summaries"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Update Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Update Device Compliance Policy Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries List Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Create Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Create Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Delete Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Delete Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Get Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Get Device Compliance Setting States"
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
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Get Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Update Device Compliance Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Setting State Summary"
					],
					"operation": [
						"Device Management Device Compliance Policy Setting State Summaries Update Device Compliance Setting States"
					]
				}
			}
		},
];
