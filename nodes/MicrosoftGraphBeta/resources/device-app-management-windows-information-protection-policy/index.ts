import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementWindowsInformationProtectionPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Windows Information Protection Policies",
					"value": "Device App Management List Windows Information Protection Policies",
					"action": "Get windowsInformationProtectionPolicies from deviceAppManagement",
					"description": "Windows information protection for apps running on devices which are not MDM enrolled.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsInformationProtectionPolicies"
						}
					}
				},
				{
					"name": "Device App Management Create Windows Information Protection Policies",
					"value": "Device App Management Create Windows Information Protection Policies",
					"action": "Create new navigation property to windowsInformationProtectionPolicies for deviceAppManagement",
					"description": "Create new navigation property to windowsInformationProtectionPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsInformationProtectionPolicies"
						}
					}
				},
				{
					"name": "Device App Management Delete Windows Information Protection Policies",
					"value": "Device App Management Delete Windows Information Protection Policies",
					"action": "Delete navigation property windowsInformationProtectionPolicies for deviceAppManagement",
					"description": "Delete navigation property windowsInformationProtectionPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/windowsInformationProtectionPolicies/{{$parameter[\"windowsInformationProtectionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Windows Information Protection Policies",
					"value": "Device App Management Get Windows Information Protection Policies",
					"action": "Get windowsInformationProtectionPolicies from deviceAppManagement",
					"description": "Windows information protection for apps running on devices which are not MDM enrolled.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsInformationProtectionPolicies/{{$parameter[\"windowsInformationProtectionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Windows Information Protection Policies",
					"value": "Device App Management Update Windows Information Protection Policies",
					"action": "Update the navigation property windowsInformationProtectionPolicies in deviceAppManagement",
					"description": "Update the navigation property windowsInformationProtectionPolicies in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/windowsInformationProtectionPolicies/{{$parameter[\"windowsInformationProtectionPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/windowsInformationProtectionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management List Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsInformationProtectionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Create Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsInformationProtectionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Create Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Delete Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Delete Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Policies"
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
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Get Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Update Windows Information Protection Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Information Protection Policy"
					],
					"operation": [
						"Device App Management Update Windows Information Protection Policies"
					]
				}
			}
		},
];
