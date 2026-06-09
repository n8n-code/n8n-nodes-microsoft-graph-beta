import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsInformationProtectionAppLearningSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Information Protection App Learning Summaries",
					"value": "Device Management List Windows Information Protection App Learning Summaries",
					"action": "Get windowsInformationProtectionAppLearningSummaries from deviceManagement",
					"description": "The windows information protection app learning summaries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsInformationProtectionAppLearningSummaries"
						}
					}
				},
				{
					"name": "Device Management Create Windows Information Protection App Learning Summaries",
					"value": "Device Management Create Windows Information Protection App Learning Summaries",
					"action": "Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement",
					"description": "Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsInformationProtectionAppLearningSummaries"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Information Protection App Learning Summaries",
					"value": "Device Management Delete Windows Information Protection App Learning Summaries",
					"action": "Delete navigation property windowsInformationProtectionAppLearningSummaries for deviceManagement",
					"description": "Delete navigation property windowsInformationProtectionAppLearningSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsInformationProtectionAppLearningSummaries/{{$parameter[\"windowsInformationProtectionAppLearningSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Information Protection App Learning Summaries",
					"value": "Device Management Get Windows Information Protection App Learning Summaries",
					"action": "Get windowsInformationProtectionAppLearningSummaries from deviceManagement",
					"description": "The windows information protection app learning summaries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsInformationProtectionAppLearningSummaries/{{$parameter[\"windowsInformationProtectionAppLearningSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Information Protection App Learning Summaries",
					"value": "Device Management Update Windows Information Protection App Learning Summaries",
					"action": "Update the navigation property windowsInformationProtectionAppLearningSummaries in deviceManagement",
					"description": "Update the navigation property windowsInformationProtectionAppLearningSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsInformationProtectionAppLearningSummaries/{{$parameter[\"windowsInformationProtectionAppLearningSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsInformationProtectionAppLearningSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management List Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsInformationProtectionAppLearningSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Create Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsInformationProtectionAppLearningSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Create Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Delete Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Delete Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection App Learning Summaries"
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
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Get Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Update Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Information Protection App Learning Summary"
					],
					"operation": [
						"Device Management Update Windows Information Protection App Learning Summaries"
					]
				}
			}
		},
];
