import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDataSharingConsentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Data Sharing Consents",
					"value": "Device Management List Data Sharing Consents",
					"action": "Get dataSharingConsents from deviceManagement",
					"description": "Data sharing consents.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/dataSharingConsents"
						}
					}
				},
				{
					"name": "Device Management Create Data Sharing Consents",
					"value": "Device Management Create Data Sharing Consents",
					"action": "Create new navigation property to dataSharingConsents for deviceManagement",
					"description": "Create new navigation property to dataSharingConsents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/dataSharingConsents"
						}
					}
				},
				{
					"name": "Device Management Delete Data Sharing Consents",
					"value": "Device Management Delete Data Sharing Consents",
					"action": "Delete navigation property dataSharingConsents for deviceManagement",
					"description": "Delete navigation property dataSharingConsents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/dataSharingConsents/{{$parameter[\"dataSharingConsent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Data Sharing Consents",
					"value": "Device Management Get Data Sharing Consents",
					"action": "Get dataSharingConsents from deviceManagement",
					"description": "Data sharing consents.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/dataSharingConsents/{{$parameter[\"dataSharingConsent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Data Sharing Consents",
					"value": "Device Management Update Data Sharing Consents",
					"action": "Update the navigation property dataSharingConsents in deviceManagement",
					"description": "Update the navigation property dataSharingConsents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/dataSharingConsents/{{$parameter[\"dataSharingConsent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/dataSharingConsents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management List Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/dataSharingConsents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Create Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/dataSharingConsents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Create Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/dataSharingConsents/{dataSharingConsent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Delete Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Delete Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/dataSharingConsents/{dataSharingConsent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Get Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Get Data Sharing Consents"
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
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Get Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Update Data Sharing Consents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Data Sharing Consent"
					],
					"operation": [
						"Device Management Update Data Sharing Consents"
					]
				}
			}
		},
];
