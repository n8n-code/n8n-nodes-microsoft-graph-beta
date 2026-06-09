import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedAppRegistrationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Managed App Registrations",
					"value": "Device App Management List Managed App Registrations",
					"action": "Get managedAppRegistrations from deviceAppManagement",
					"description": "The managed app registrations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations"
						}
					}
				},
				{
					"name": "Device App Management Create Managed App Registrations",
					"value": "Device App Management Create Managed App Registrations",
					"action": "Create new navigation property to managedAppRegistrations for deviceAppManagement",
					"description": "Create new navigation property to managedAppRegistrations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations"
						}
					}
				},
				{
					"name": "Device App Management Delete Managed App Registrations",
					"value": "Device App Management Delete Managed App Registrations",
					"action": "Delete navigation property managedAppRegistrations for deviceAppManagement",
					"description": "Delete navigation property managedAppRegistrations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Managed App Registrations",
					"value": "Device App Management Get Managed App Registrations",
					"action": "Get managedAppRegistrations from deviceAppManagement",
					"description": "The managed app registrations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Managed App Registrations",
					"value": "Device App Management Update Managed App Registrations",
					"action": "Update the navigation property managedAppRegistrations in deviceAppManagement",
					"description": "Update the navigation property managedAppRegistrations in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations List Applied Policies",
					"value": "Device App Management Managed App Registrations List Applied Policies",
					"action": "Get appliedPolicies from deviceAppManagement",
					"description": "Zero or more policys already applied on the registered app when it last synchronized with managment service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Create Applied Policies",
					"value": "Device App Management Managed App Registrations Create Applied Policies",
					"action": "Create new navigation property to appliedPolicies for deviceAppManagement",
					"description": "Create new navigation property to appliedPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Delete Applied Policies",
					"value": "Device App Management Managed App Registrations Delete Applied Policies",
					"action": "Delete navigation property appliedPolicies for deviceAppManagement",
					"description": "Delete navigation property appliedPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Get Applied Policies",
					"value": "Device App Management Managed App Registrations Get Applied Policies",
					"action": "Get appliedPolicies from deviceAppManagement",
					"description": "Zero or more policys already applied on the registered app when it last synchronized with managment service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Update Applied Policies",
					"value": "Device App Management Managed App Registrations Update Applied Policies",
					"action": "Update the navigation property appliedPolicies in deviceAppManagement",
					"description": "Update the navigation property appliedPolicies in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/appliedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations List Intended Policies",
					"value": "Device App Management Managed App Registrations List Intended Policies",
					"action": "Get intendedPolicies from deviceAppManagement",
					"description": "Zero or more policies admin intended for the app as of now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Create Intended Policies",
					"value": "Device App Management Managed App Registrations Create Intended Policies",
					"action": "Create new navigation property to intendedPolicies for deviceAppManagement",
					"description": "Create new navigation property to intendedPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Delete Intended Policies",
					"value": "Device App Management Managed App Registrations Delete Intended Policies",
					"action": "Delete navigation property intendedPolicies for deviceAppManagement",
					"description": "Delete navigation property intendedPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Get Intended Policies",
					"value": "Device App Management Managed App Registrations Get Intended Policies",
					"action": "Get intendedPolicies from deviceAppManagement",
					"description": "Zero or more policies admin intended for the app as of now.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Update Intended Policies",
					"value": "Device App Management Managed App Registrations Update Intended Policies",
					"action": "Update the navigation property intendedPolicies in deviceAppManagement",
					"description": "Update the navigation property intendedPolicies in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/intendedPolicies/{{$parameter[\"managedAppPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations List Operations",
					"value": "Device App Management Managed App Registrations List Operations",
					"action": "Get operations from deviceAppManagement",
					"description": "Zero or more long running operations triggered on the app registration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Create Operations",
					"value": "Device App Management Managed App Registrations Create Operations",
					"action": "Create new navigation property to operations for deviceAppManagement",
					"description": "Create new navigation property to operations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Delete Operations",
					"value": "Device App Management Managed App Registrations Delete Operations",
					"action": "Delete navigation property operations for deviceAppManagement",
					"description": "Delete navigation property operations for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/operations/{{$parameter[\"managedAppOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Get Operations",
					"value": "Device App Management Managed App Registrations Get Operations",
					"action": "Get operations from deviceAppManagement",
					"description": "Zero or more long running operations triggered on the app registration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/operations/{{$parameter[\"managedAppOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed App Registrations Update Operations",
					"value": "Device App Management Managed App Registrations Update Operations",
					"action": "Update the navigation property operations in deviceAppManagement",
					"description": "Update the navigation property operations in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppRegistrations/{{$parameter[\"managedAppRegistration-id\"]}}/operations/{{$parameter[\"managedAppOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management List Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Create Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Create Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Delete Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Delete Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Get Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Get Managed App Registrations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Get Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Update Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Update Managed App Registrations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Applied Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Applied Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Intended Policies"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Intended Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Operations"
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
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Registration"
					],
					"operation": [
						"Device App Management Managed App Registrations Update Operations"
					]
				}
			}
		},
];
