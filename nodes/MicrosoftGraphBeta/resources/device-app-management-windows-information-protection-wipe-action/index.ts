import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementWindowsInformationProtectionWipeActionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Windows Information Protection Wipe Actions",
					"value": "Device App Management List Windows Information Protection Wipe Actions",
					"action": "Get windowsInformationProtectionWipeActions from deviceAppManagement",
					"description": "Windows information protection wipe actions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsInformationProtectionWipeActions"
						}
					}
				},
				{
					"name": "Device App Management Create Windows Information Protection Wipe Actions",
					"value": "Device App Management Create Windows Information Protection Wipe Actions",
					"action": "Create new navigation property to windowsInformationProtectionWipeActions for deviceAppManagement",
					"description": "Create new navigation property to windowsInformationProtectionWipeActions for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsInformationProtectionWipeActions"
						}
					}
				},
				{
					"name": "Device App Management Delete Windows Information Protection Wipe Actions",
					"value": "Device App Management Delete Windows Information Protection Wipe Actions",
					"action": "Delete navigation property windowsInformationProtectionWipeActions for deviceAppManagement",
					"description": "Delete navigation property windowsInformationProtectionWipeActions for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/windowsInformationProtectionWipeActions/{{$parameter[\"windowsInformationProtectionWipeAction-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Windows Information Protection Wipe Actions",
					"value": "Device App Management Get Windows Information Protection Wipe Actions",
					"action": "Get windowsInformationProtectionWipeActions from deviceAppManagement",
					"description": "Windows information protection wipe actions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsInformationProtectionWipeActions/{{$parameter[\"windowsInformationProtectionWipeAction-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Windows Information Protection Wipe Actions",
					"value": "Device App Management Update Windows Information Protection Wipe Actions",
					"action": "Update the navigation property windowsInformationProtectionWipeActions in deviceAppManagement",
					"description": "Update the navigation property windowsInformationProtectionWipeActions in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/windowsInformationProtectionWipeActions/{{$parameter[\"windowsInformationProtectionWipeAction-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/windowsInformationProtectionWipeActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management List Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsInformationProtectionWipeActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Create Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsInformationProtectionWipeActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Create Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Delete Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Delete Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Wipe Actions"
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
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Update Windows Information Protection Wipe Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Wipe Action"
					],
					"operation": [
						"Device App Management Update Windows Information Protection Wipe Actions"
					]
				}
			}
		},
];
