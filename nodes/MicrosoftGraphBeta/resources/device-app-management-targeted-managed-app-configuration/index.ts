import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementTargetedManagedAppConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Targeted Managed App Configurations",
					"value": "Device App Management List Targeted Managed App Configurations",
					"action": "Get targetedManagedAppConfigurations from deviceAppManagement",
					"description": "Targeted managed app configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Create Targeted Managed App Configurations",
					"value": "Device App Management Create Targeted Managed App Configurations",
					"action": "Create new navigation property to targetedManagedAppConfigurations for deviceAppManagement",
					"description": "Create new navigation property to targetedManagedAppConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations"
						}
					}
				},
				{
					"name": "Device App Management Delete Targeted Managed App Configurations",
					"value": "Device App Management Delete Targeted Managed App Configurations",
					"action": "Delete navigation property targetedManagedAppConfigurations for deviceAppManagement",
					"description": "Delete navigation property targetedManagedAppConfigurations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Targeted Managed App Configurations",
					"value": "Device App Management Get Targeted Managed App Configurations",
					"action": "Get targetedManagedAppConfigurations from deviceAppManagement",
					"description": "Targeted managed app configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Targeted Managed App Configurations",
					"value": "Device App Management Update Targeted Managed App Configurations",
					"action": "Update the navigation property targetedManagedAppConfigurations in deviceAppManagement",
					"description": "Update the navigation property targetedManagedAppConfigurations in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations List Apps",
					"value": "Device App Management Targeted Managed App Configurations List Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Create Apps",
					"value": "Device App Management Targeted Managed App Configurations Create Apps",
					"action": "Create new navigation property to apps for deviceAppManagement",
					"description": "Create new navigation property to apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/apps"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Delete Apps",
					"value": "Device App Management Targeted Managed App Configurations Delete Apps",
					"action": "Delete navigation property apps for deviceAppManagement",
					"description": "Delete navigation property apps for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Get Apps",
					"value": "Device App Management Targeted Managed App Configurations Get Apps",
					"action": "Get apps from deviceAppManagement",
					"description": "List of apps to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Update Apps",
					"value": "Device App Management Targeted Managed App Configurations Update Apps",
					"action": "Update the navigation property apps in deviceAppManagement",
					"description": "Update the navigation property apps in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/apps/{{$parameter[\"managedMobileApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations List Assignments",
					"value": "Device App Management Targeted Managed App Configurations List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Navigation property to list of inclusion and exclusion groups to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Create Assignments",
					"value": "Device App Management Targeted Managed App Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Delete Assignments",
					"value": "Device App Management Targeted Managed App Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Get Assignments",
					"value": "Device App Management Targeted Managed App Configurations Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "Navigation property to list of inclusion and exclusion groups to which the policy is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Update Assignments",
					"value": "Device App Management Targeted Managed App Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/assignments/{{$parameter[\"targetedManagedAppPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Delete Deployment Summary",
					"value": "Device App Management Targeted Managed App Configurations Delete Deployment Summary",
					"action": "Delete navigation property deploymentSummary for deviceAppManagement",
					"description": "Delete navigation property deploymentSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/deploymentSummary"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Get Deployment Summary",
					"value": "Device App Management Targeted Managed App Configurations Get Deployment Summary",
					"action": "Get deploymentSummary from deviceAppManagement",
					"description": "Navigation property to deployment summary of the configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/deploymentSummary"
						}
					}
				},
				{
					"name": "Device App Management Targeted Managed App Configurations Update Deployment Summary",
					"value": "Device App Management Targeted Managed App Configurations Update Deployment Summary",
					"action": "Update the navigation property deploymentSummary in deviceAppManagement",
					"description": "Update the navigation property deploymentSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/targetedManagedAppConfigurations/{{$parameter[\"targetedManagedAppConfiguration-id\"]}}/deploymentSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management List Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Create Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Create Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Delete Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Delete Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Get Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Get Targeted Managed App Configurations"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Get Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Update Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Update Targeted Managed App Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Create Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Create Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Apps"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Assignments"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Deployment Summary"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Delete Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Deployment Summary"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Deployment Summary"
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
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Get Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Deployment Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Targeted Managed App Configuration"
					],
					"operation": [
						"Device App Management Targeted Managed App Configurations Update Deployment Summary"
					]
				}
			}
		},
];
