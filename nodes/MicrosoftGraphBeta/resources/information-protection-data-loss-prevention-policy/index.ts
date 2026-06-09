import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionDataLossPreventionPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection List Data Loss Prevention Policies",
					"value": "Information Protection List Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from informationProtection",
					"description": "Get dataLossPreventionPolicies from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Information Protection Create Data Loss Prevention Policies",
					"value": "Information Protection Create Data Loss Prevention Policies",
					"action": "Create new navigation property to dataLossPreventionPolicies for informationProtection",
					"description": "Create new navigation property to dataLossPreventionPolicies for informationProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Information Protection Delete Data Loss Prevention Policies",
					"value": "Information Protection Delete Data Loss Prevention Policies",
					"action": "Delete navigation property dataLossPreventionPolicies for informationProtection",
					"description": "Delete navigation property dataLossPreventionPolicies for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Get Data Loss Prevention Policies",
					"value": "Information Protection Get Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from informationProtection",
					"description": "Get dataLossPreventionPolicies from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Update Data Loss Prevention Policies",
					"value": "Information Protection Update Data Loss Prevention Policies",
					"action": "Update the navigation property dataLossPreventionPolicies in informationProtection",
					"description": "Update the navigation property dataLossPreventionPolicies in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection List Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/dataLossPreventionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Delete Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Delete Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Get Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Get Data Loss Prevention Policies"
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
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Get Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Data Loss Prevention Policy"
					],
					"operation": [
						"Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
];
