import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionBitlockerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Bitlocker"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection Get Bitlocker",
					"value": "Information Protection Get Bitlocker",
					"action": "Get bitlocker from informationProtection",
					"description": "Get bitlocker from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/bitlocker"
						}
					}
				},
				{
					"name": "Information Protection Bitlocker List Recovery Keys",
					"value": "Information Protection Bitlocker List Recovery Keys",
					"action": "List recoveryKeys",
					"description": "Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the **key** property. For information about how to read the **key** property, see Get bitlockerRecoveryKey.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/bitlocker/recoveryKeys"
						}
					}
				},
				{
					"name": "Information Protection Bitlocker Get Recovery Keys",
					"value": "Information Protection Bitlocker Get Recovery Keys",
					"action": "Get recoveryKeys from informationProtection",
					"description": "The recovery keys associated with the bitlocker entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/bitlocker/recoveryKeys/{{$parameter[\"bitlockerRecoveryKey-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /informationProtection/bitlocker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Get Bitlocker"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Get Bitlocker"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Get Bitlocker"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/bitlocker/recoveryKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker List Recovery Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker Get Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker Get Recovery Keys"
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
						"Information Protection Bitlocker"
					],
					"operation": [
						"Information Protection Bitlocker Get Recovery Keys"
					]
				}
			}
		},
];
