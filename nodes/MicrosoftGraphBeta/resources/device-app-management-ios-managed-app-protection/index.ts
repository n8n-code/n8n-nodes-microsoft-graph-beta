import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementIosManagedAppProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Ios Managed App Protections",
					"value": "Device App Management List Ios Managed App Protections",
					"action": "Get iosManagedAppProtections from deviceAppManagement",
					"description": "iOS managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosManagedAppProtections"
						}
					}
				},
				{
					"name": "Device App Management Create Ios Managed App Protections",
					"value": "Device App Management Create Ios Managed App Protections",
					"action": "Create new navigation property to iosManagedAppProtections for deviceAppManagement",
					"description": "Create new navigation property to iosManagedAppProtections for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosManagedAppProtections"
						}
					}
				},
				{
					"name": "Device App Management Delete Ios Managed App Protections",
					"value": "Device App Management Delete Ios Managed App Protections",
					"action": "Delete navigation property iosManagedAppProtections for deviceAppManagement",
					"description": "Delete navigation property iosManagedAppProtections for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Ios Managed App Protections",
					"value": "Device App Management Get Ios Managed App Protections",
					"action": "Get iosManagedAppProtections from deviceAppManagement",
					"description": "iOS managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Ios Managed App Protections",
					"value": "Device App Management Update Ios Managed App Protections",
					"action": "Update the navigation property iosManagedAppProtections in deviceAppManagement",
					"description": "Update the navigation property iosManagedAppProtections in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections List Apps",
					"value": "Device App Management Ios Managed App Protections List Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Create Apps",
					"value": "Device App Management Ios Managed App Protections Create Apps",
					"action": "Create new navigation property to apps for deviceAppManagement",
					"description": "Create new navigation property to apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Delete Apps",
					"value": "Device App Management Ios Managed App Protections Delete Apps",
					"action": "Delete navigation property apps for deviceAppManagement",
					"description": "Delete navigation property apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Get Apps",
					"value": "Device App Management Ios Managed App Protections Get Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Update Apps",
					"value": "Device App Management Ios Managed App Protections Update Apps",
					"action": "Update the navigation property apps in deviceAppManagement",
					"description": "Update the navigation property apps in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Delete Deployment Summary",
					"value": "Device App Management Ios Managed App Protections Delete Deployment Summary",
					"action": "Delete navigation property deploymentSummary for deviceAppManagement",
					"description": "Delete navigation property deploymentSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/deploymentSummary"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Get Deployment Summary",
					"value": "Device App Management Ios Managed App Protections Get Deployment Summary",
					"action": "Get deploymentSummary from deviceAppManagement",
					"description": "Navigation property to deployment summary of the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/deploymentSummary"
						}
					}
				},
				{
					"name": "Device App Management Ios Managed App Protections Update Deployment Summary",
					"value": "Device App Management Ios Managed App Protections Update Deployment Summary",
					"action": "Update the navigation property deploymentSummary in deviceAppManagement",
					"description": "Update the navigation property deploymentSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/iosManagedAppProtections/{{$parameter[\"iosManagedAppProtection-id\"]}}/deploymentSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/iosManagedAppProtections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management List Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosManagedAppProtections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Create Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosManagedAppProtections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Create Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Delete Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Delete Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Get Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Get Ios Managed App Protections"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Get Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Update Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Update Ios Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections List Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Create Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Create Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Delete Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Delete Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Apps"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Update Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Update Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Delete Deployment Summary"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Delete Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Deployment Summary"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Deployment Summary"
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
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Get Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Update Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Ios Managed App Protection"
					],
					"operation": [
						"Device App Management Ios Managed App Protections Update Deployment Summary"
					]
				}
			}
		},
];
