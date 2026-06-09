import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementWindowsManagedAppProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Windows Managed App Protections",
					"value": "Device App Management List Windows Managed App Protections",
					"action": "Get windowsManagedAppProtections from deviceAppManagement",
					"description": "Windows managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections"
						}
					}
				},
				{
					"name": "Device App Management Create Windows Managed App Protections",
					"value": "Device App Management Create Windows Managed App Protections",
					"action": "Create new navigation property to windowsManagedAppProtections for deviceAppManagement",
					"description": "Create new navigation property to windowsManagedAppProtections for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsManagedAppProtections"
						}
					}
				},
				{
					"name": "Device App Management Delete Windows Managed App Protections",
					"value": "Device App Management Delete Windows Managed App Protections",
					"action": "Delete navigation property windowsManagedAppProtections for deviceAppManagement",
					"description": "Delete navigation property windowsManagedAppProtections for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Windows Managed App Protections",
					"value": "Device App Management Get Windows Managed App Protections",
					"action": "Get windowsManagedAppProtections from deviceAppManagement",
					"description": "Windows managed app policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Windows Managed App Protections",
					"value": "Device App Management Update Windows Managed App Protections",
					"action": "Update the navigation property windowsManagedAppProtections in deviceAppManagement",
					"description": "Update the navigation property windowsManagedAppProtections in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections List Apps",
					"value": "Device App Management Windows Managed App Protections List Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Create Apps",
					"value": "Device App Management Windows Managed App Protections Create Apps",
					"action": "Create new navigation property to apps for deviceAppManagement",
					"description": "Create new navigation property to apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Delete Apps",
					"value": "Device App Management Windows Managed App Protections Delete Apps",
					"action": "Delete navigation property apps for deviceAppManagement",
					"description": "Delete navigation property apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Get Apps",
					"value": "Device App Management Windows Managed App Protections Get Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Update Apps",
					"value": "Device App Management Windows Managed App Protections Update Apps",
					"action": "Update the navigation property apps in deviceAppManagement",
					"description": "Update the navigation property apps in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections List Assignments",
					"value": "Device App Management Windows Managed App Protections List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Navigation property to list of inclusion and exclusion groups to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Create Assignments",
					"value": "Device App Management Windows Managed App Protections Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Delete Assignments",
					"value": "Device App Management Windows Managed App Protections Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Get Assignments",
					"value": "Device App Management Windows Managed App Protections Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Navigation property to list of inclusion and exclusion groups to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Windows Managed App Protections Update Assignments",
					"value": "Device App Management Windows Managed App Protections Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/windowsManagedAppProtections/{{$parameter[\"windowsManagedAppProtection-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management List Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Create Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Create Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Delete Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Delete Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Get Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Get Windows Managed App Protections"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Get Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Update Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Update Windows Managed App Protections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Create Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Create Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Delete Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Delete Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Apps"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Update Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Update Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Delete Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Assignments"
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
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Managed App Protection"
					],
					"operation": [
						"Device App Management Windows Managed App Protections Update Assignments"
					]
				}
			}
		},
];
