import type { INodeProperties } from 'n8n-workflow';

export const policiesMobilityManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Mobile App Management Policies",
					"value": "Policies List Mobile App Management Policies",
					"action": "List mobileAppManagementPolicies",
					"description": "Get a list of the mobilityManagementPolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileAppManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Create Mobile App Management Policies",
					"value": "Policies Create Mobile App Management Policies",
					"action": "Create new navigation property to mobileAppManagementPolicies for policies",
					"description": "Create new navigation property to mobileAppManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/mobileAppManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Mobile App Management Policies",
					"value": "Policies Delete Mobile App Management Policies",
					"action": "Delete navigation property mobileAppManagementPolicies for policies",
					"description": "Delete navigation property mobileAppManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Mobile App Management Policies",
					"value": "Policies Get Mobile App Management Policies",
					"action": "Get mobileAppManagementPolicies from policies",
					"description": "The policy that defines auto-enrollment configuration for a mobility management (MDM or MAM) application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Mobile App Management Policies",
					"value": "Policies Update Mobile App Management Policies",
					"action": "Update the navigation property mobileAppManagementPolicies in policies",
					"description": "Update the navigation property mobileAppManagementPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Mobile App Management Policies List Included Groups",
					"value": "Policies Mobile App Management Policies List Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups"
						}
					}
				},
				{
					"name": "Policies Mobile App Management Policies List Ref Included Groups",
					"value": "Policies Mobile App Management Policies List Ref Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Policies Mobile App Management Policies Create Ref Included Groups",
					"value": "Policies Mobile App Management Policies Create Ref Included Groups",
					"action": "Create new navigation property ref to includedGroups for policies",
					"description": "Create new navigation property ref to includedGroups for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Policies Mobile App Management Policies Delete Ref Included Groups",
					"value": "Policies Mobile App Management Policies Delete Ref Included Groups",
					"action": "Delete ref of navigation property includedGroups for policies",
					"description": "Delete ref of navigation property includedGroups for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/mobileAppManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/{{$parameter[\"group-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Policies List Mobile Device Management Policies",
					"value": "Policies List Mobile Device Management Policies",
					"action": "List mobileDeviceManagementPolicies",
					"description": "Get a list of the mobilityManagementPolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileDeviceManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Create Mobile Device Management Policies",
					"value": "Policies Create Mobile Device Management Policies",
					"action": "Create new navigation property to mobileDeviceManagementPolicies for policies",
					"description": "Create new navigation property to mobileDeviceManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/mobileDeviceManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Mobile Device Management Policies",
					"value": "Policies Delete Mobile Device Management Policies",
					"action": "Delete navigation property mobileDeviceManagementPolicies for policies",
					"description": "Delete navigation property mobileDeviceManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Mobile Device Management Policies",
					"value": "Policies Get Mobile Device Management Policies",
					"action": "Get mobileDeviceManagementPolicies from policies",
					"description": "Get mobileDeviceManagementPolicies from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Mobile Device Management Policies",
					"value": "Policies Update Mobile Device Management Policies",
					"action": "Update the navigation property mobileDeviceManagementPolicies in policies",
					"description": "Update the navigation property mobileDeviceManagementPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Mobile Device Management Policies List Included Groups",
					"value": "Policies Mobile Device Management Policies List Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups"
						}
					}
				},
				{
					"name": "Policies Mobile Device Management Policies List Ref Included Groups",
					"value": "Policies Mobile Device Management Policies List Ref Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Policies Mobile Device Management Policies Create Ref Included Groups",
					"value": "Policies Mobile Device Management Policies Create Ref Included Groups",
					"action": "Create new navigation property ref to includedGroups for policies",
					"description": "Create new navigation property ref to includedGroups for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Policies Mobile Device Management Policies Delete Ref Included Groups",
					"value": "Policies Mobile Device Management Policies Delete Ref Included Groups",
					"action": "Delete ref of navigation property includedGroups for policies",
					"description": "Delete ref of navigation property includedGroups for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/mobileDeviceManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/{{$parameter[\"group-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/mobileAppManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileAppManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Create Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileAppManagementPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Create Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Delete Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Delete Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile App Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Update Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Update Mobile App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}/includedGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Included Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies List Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies Create Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies Create Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies Delete Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies Delete Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile App Management Policies Delete Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileDeviceManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies List Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileDeviceManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Create Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileDeviceManagementPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Create Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Delete Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Delete Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile Device Management Policies"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Get Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Update Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Update Mobile Device Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Included Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies List Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies Create Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies Create Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies Delete Ref Included Groups"
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
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies Delete Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Mobility Management Policy"
					],
					"operation": [
						"Policies Mobile Device Management Policies Delete Ref Included Groups"
					]
				}
			}
		},
];
