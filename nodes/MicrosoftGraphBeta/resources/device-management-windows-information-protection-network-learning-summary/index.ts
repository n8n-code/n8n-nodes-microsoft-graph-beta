import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsInformationProtectionNetworkLearningSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Information Protection Network Learning Summaries",
					"value": "Device Management List Windows Information Protection Network Learning Summaries",
					"action": "Get windowsInformationProtectionNetworkLearningSummaries from deviceManagement",
					"description": "The windows information protection network learning summaries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsInformationProtectionNetworkLearningSummaries"
						}
					}
				},
				{
					"name": "Device Management Create Windows Information Protection Network Learning Summaries",
					"value": "Device Management Create Windows Information Protection Network Learning Summaries",
					"action": "Create new navigation property to windowsInformationProtectionNetworkLearningSummaries for deviceManagement",
					"description": "Create new navigation property to windowsInformationProtectionNetworkLearningSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsInformationProtectionNetworkLearningSummaries"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Information Protection Network Learning Summaries",
					"value": "Device Management Delete Windows Information Protection Network Learning Summaries",
					"action": "Delete navigation property windowsInformationProtectionNetworkLearningSummaries for deviceManagement",
					"description": "Delete navigation property windowsInformationProtectionNetworkLearningSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{{$parameter[\"windowsInformationProtectionNetworkLearningSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Information Protection Network Learning Summaries",
					"value": "Device Management Get Windows Information Protection Network Learning Summaries",
					"action": "Get windowsInformationProtectionNetworkLearningSummaries from deviceManagement",
					"description": "The windows information protection network learning summaries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{{$parameter[\"windowsInformationProtectionNetworkLearningSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Information Protection Network Learning Summaries",
					"value": "Device Management Update Windows Information Protection Network Learning Summaries",
					"action": "Update the navigation property windowsInformationProtectionNetworkLearningSummaries in deviceManagement",
					"description": "Update the navigation property windowsInformationProtectionNetworkLearningSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{{$parameter[\"windowsInformationProtectionNetworkLearningSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Create Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Create Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Delete Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Delete Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection Network Learning Summaries"
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
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Update Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection Network Learning Summary"
					],
					"operation": [
						"Device Management Update Windows Information Protection Network Learning Summaries"
					]
				}
			}
		},
];
