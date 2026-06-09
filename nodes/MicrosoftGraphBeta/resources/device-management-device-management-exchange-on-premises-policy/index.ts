import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementExchangeOnPremisesPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Exchange On Premises Policies",
					"value": "Device Management List Exchange On Premises Policies",
					"action": "Get exchangeOnPremisesPolicies from deviceManagement",
					"description": "The list of Exchange On Premisis policies configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies"
						}
					}
				},
				{
					"name": "Device Management Create Exchange On Premises Policies",
					"value": "Device Management Create Exchange On Premises Policies",
					"action": "Create new navigation property to exchangeOnPremisesPolicies for deviceManagement",
					"description": "Create new navigation property to exchangeOnPremisesPolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies"
						}
					}
				},
				{
					"name": "Device Management Delete Exchange On Premises Policies",
					"value": "Device Management Delete Exchange On Premises Policies",
					"action": "Delete navigation property exchangeOnPremisesPolicies for deviceManagement",
					"description": "Delete navigation property exchangeOnPremisesPolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Exchange On Premises Policies",
					"value": "Device Management Get Exchange On Premises Policies",
					"action": "Get exchangeOnPremisesPolicies from deviceManagement",
					"description": "The list of Exchange On Premisis policies configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Exchange On Premises Policies",
					"value": "Device Management Update Exchange On Premises Policies",
					"action": "Update the navigation property exchangeOnPremisesPolicies in deviceManagement",
					"description": "Update the navigation property exchangeOnPremisesPolicies in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policies Delete Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policies Delete Conditional Access Settings",
					"action": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"description": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policies Get Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policies Get Conditional Access Settings",
					"action": "Get conditionalAccessSettings from deviceManagement",
					"description": "The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policies Update Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policies Update Conditional Access Settings",
					"action": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"description": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/exchangeOnPremisesPolicies/{{$parameter[\"deviceManagementExchangeOnPremisesPolicy-id\"]}}/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Exchange On Premises Policy",
					"value": "Device Management Delete Exchange On Premises Policy",
					"action": "Delete navigation property exchangeOnPremisesPolicy for deviceManagement",
					"description": "Delete navigation property exchangeOnPremisesPolicy for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy"
						}
					}
				},
				{
					"name": "Device Management Get Exchange On Premises Policy",
					"value": "Device Management Get Exchange On Premises Policy",
					"action": "Get exchangeOnPremisesPolicy from deviceManagement",
					"description": "The policy which controls mobile device access to Exchange On Premises",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy"
						}
					}
				},
				{
					"name": "Device Management Update Exchange On Premises Policy",
					"value": "Device Management Update Exchange On Premises Policy",
					"action": "Update the navigation property exchangeOnPremisesPolicy in deviceManagement",
					"description": "Update the navigation property exchangeOnPremisesPolicy in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policy Delete Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policy Delete Conditional Access Settings",
					"action": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"description": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policy Get Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policy Get Conditional Access Settings",
					"action": "Get conditionalAccessSettings from deviceManagement",
					"description": "The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Exchange On Premises Policy Update Conditional Access Settings",
					"value": "Device Management Exchange On Premises Policy Update Conditional Access Settings",
					"action": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"description": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/exchangeOnPremisesPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management List Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/exchangeOnPremisesPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Create Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/exchangeOnPremisesPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Create Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Delete Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Delete Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policies"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Update Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Update Exchange On Premises Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Delete Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Delete Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Get Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Get Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Get Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Update Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policies Update Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/exchangeOnPremisesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Delete Exchange On Premises Policy"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Delete Exchange On Premises Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/exchangeOnPremisesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policy"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policy"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Get Exchange On Premises Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Update Exchange On Premises Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Update Exchange On Premises Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Delete Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Delete Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Get Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Get Conditional Access Settings"
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
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Get Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Update Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Exchange On Premises Policy"
					],
					"operation": [
						"Device Management Exchange On Premises Policy Update Conditional Access Settings"
					]
				}
			}
		},
];
