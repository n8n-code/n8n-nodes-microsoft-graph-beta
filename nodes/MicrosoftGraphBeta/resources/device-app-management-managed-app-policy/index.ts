import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedAppPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Managed App Policies",
					"value": "Device App Management List Managed App Policies",
					"action": "Get managedAppPolicies from deviceAppManagement",
					"description": "Managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppPolicies"
						}
					}
				},
				{
					"name": "Device App Management Create Managed App Policies",
					"value": "Device App Management Create Managed App Policies",
					"action": "Create new navigation property to managedAppPolicies for deviceAppManagement",
					"description": "Create new navigation property to managedAppPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppPolicies"
						}
					}
				},
				{
					"name": "Device App Management Delete Managed App Policies",
					"value": "Device App Management Delete Managed App Policies",
					"action": "Delete navigation property managedAppPolicies for deviceAppManagement",
					"description": "Delete navigation property managedAppPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Managed App Policies",
					"value": "Device App Management Get Managed App Policies",
					"action": "Get managedAppPolicies from deviceAppManagement",
					"description": "Managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Managed App Policies",
					"value": "Device App Management Update Managed App Policies",
					"action": "Update the navigation property managedAppPolicies in deviceAppManagement",
					"description": "Update the navigation property managedAppPolicies in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management List Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Create Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Create Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Delete Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Delete Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Get Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Get Managed App Policies"
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
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Get Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Update Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Policy"
					],
					"operation": [
						"Device App Management Update Managed App Policies"
					]
				}
			}
		},
];
