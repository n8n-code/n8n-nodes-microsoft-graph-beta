import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementImportedDeviceIdentityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Imported Device Identities",
					"value": "Device Management List Imported Device Identities",
					"action": "Get importedDeviceIdentities from deviceManagement",
					"description": "The imported device identities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/importedDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Create Imported Device Identities",
					"value": "Device Management Create Imported Device Identities",
					"action": "Create new navigation property to importedDeviceIdentities for deviceManagement",
					"description": "Create new navigation property to importedDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/importedDeviceIdentities"
						}
					}
				},
				{
					"name": "Device Management Delete Imported Device Identities",
					"value": "Device Management Delete Imported Device Identities",
					"action": "Delete navigation property importedDeviceIdentities for deviceManagement",
					"description": "Delete navigation property importedDeviceIdentities for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/importedDeviceIdentities/{{$parameter[\"importedDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Imported Device Identities",
					"value": "Device Management Get Imported Device Identities",
					"action": "Get importedDeviceIdentities from deviceManagement",
					"description": "The imported device identities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/importedDeviceIdentities/{{$parameter[\"importedDeviceIdentity-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Imported Device Identities",
					"value": "Device Management Update Imported Device Identities",
					"action": "Update the navigation property importedDeviceIdentities in deviceManagement",
					"description": "Update the navigation property importedDeviceIdentities in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/importedDeviceIdentities/{{$parameter[\"importedDeviceIdentity-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/importedDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management List Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedDeviceIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Create Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedDeviceIdentities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Create Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Delete Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Delete Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Get Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Get Imported Device Identities"
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
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Get Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Update Imported Device Identities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Imported Device Identity"
					],
					"operation": [
						"Device Management Update Imported Device Identities"
					]
				}
			}
		},
];
