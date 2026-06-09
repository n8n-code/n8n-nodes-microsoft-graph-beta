import type { INodeProperties } from 'n8n-workflow';

export const policiesFeatureRolloutPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Feature Rollout Policies",
					"value": "Policies List Feature Rollout Policies",
					"action": "List featureRolloutPolicies",
					"description": "Retrieve a list of featureRolloutPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/featureRolloutPolicies"
						}
					}
				},
				{
					"name": "Policies Create Feature Rollout Policies",
					"value": "Policies Create Feature Rollout Policies",
					"action": "Create featureRolloutPolicy",
					"description": "Create a new featureRolloutPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Feature Rollout Policies",
					"value": "Policies Delete Feature Rollout Policies",
					"action": "Delete navigation property featureRolloutPolicies for policies",
					"description": "Delete navigation property featureRolloutPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Feature Rollout Policies",
					"value": "Policies Get Feature Rollout Policies",
					"action": "Get featureRolloutPolicies from policies",
					"description": "The feature rollout policy associated with a directory object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Feature Rollout Policies",
					"value": "Policies Update Feature Rollout Policies",
					"action": "Update the navigation property featureRolloutPolicies in policies",
					"description": "Update the navigation property featureRolloutPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies List Applies To",
					"value": "Policies Feature Rollout Policies List Applies To",
					"action": "Get appliesTo from policies",
					"description": "Nullable. Specifies a list of directoryObjects that feature is enabled for.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Create Applies To",
					"value": "Policies Feature Rollout Policies Create Applies To",
					"action": "Create new navigation property to appliesTo for policies",
					"description": "Create new navigation property to appliesTo for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies List Ref Applies To",
					"value": "Policies Feature Rollout Policies List Ref Applies To",
					"action": "Get ref of appliesTo from policies",
					"description": "Nullable. Specifies a list of directoryObjects that feature is enabled for.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/$ref"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Create Ref Applies To",
					"value": "Policies Feature Rollout Policies Create Ref Applies To",
					"action": "Create new navigation property ref to appliesTo for policies",
					"description": "Create new navigation property ref to appliesTo for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/$ref"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Delete Ref Applies To",
					"value": "Policies Feature Rollout Policies Delete Ref Applies To",
					"action": "Delete ref of navigation property appliesTo for policies",
					"description": "Delete ref of navigation property appliesTo for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/{{$parameter[\"directoryObject-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/featureRolloutPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies List Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Create Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Create Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Delete Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Delete Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Get Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Get Feature Rollout Policies"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Get Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Update Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Update Feature Rollout Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Applies To"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Create Applies To"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Create Applies To"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies List Ref Applies To"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Create Ref Applies To"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Create Ref Applies To"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/{directoryObject-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Delete Ref Applies To"
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Delete Ref Applies To"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Policies Feature Rollout Policy"
					],
					"operation": [
						"Policies Feature Rollout Policies Delete Ref Applies To"
					]
				}
			}
		},
];
