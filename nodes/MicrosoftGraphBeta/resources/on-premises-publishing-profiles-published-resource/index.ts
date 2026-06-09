import type { INodeProperties } from 'n8n-workflow';

export const onPremisesPublishingProfilesPublishedResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					]
				}
			},
			"options": [
				{
					"name": "On Premises Publishing Profiles List Published Resources",
					"value": "On Premises Publishing Profiles List Published Resources",
					"action": "List publishedResources",
					"description": "Retrieve a list of publishedResource objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Create Published Resources",
					"value": "On Premises Publishing Profiles Create Published Resources",
					"action": "Create publishedResource",
					"description": "Create a new publishedResource object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Delete Published Resources",
					"value": "On Premises Publishing Profiles Delete Published Resources",
					"action": "Delete navigation property publishedResources for onPremisesPublishingProfiles",
					"description": "Delete navigation property publishedResources for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Get Published Resources",
					"value": "On Premises Publishing Profiles Get Published Resources",
					"action": "Get publishedResources from onPremisesPublishingProfiles",
					"description": "List of existing publishedResource objects. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Update Published Resources",
					"value": "On Premises Publishing Profiles Update Published Resources",
					"action": "Update the navigation property publishedResources in onPremisesPublishingProfiles",
					"description": "Update the navigation property publishedResources in onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Published Resources List Agent Groups",
					"value": "On Premises Publishing Profiles Published Resources List Agent Groups",
					"action": "Get agentGroups from onPremisesPublishingProfiles",
					"description": "List of onPremisesAgentGroups that a publishedResource is assigned to. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}/agentGroups"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Published Resources Create Agent Groups",
					"value": "On Premises Publishing Profiles Published Resources Create Agent Groups",
					"action": "Create new navigation property to agentGroups for onPremisesPublishingProfiles",
					"description": "Create new navigation property to agentGroups for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}/agentGroups"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Published Resources List Ref Agent Groups",
					"value": "On Premises Publishing Profiles Published Resources List Ref Agent Groups",
					"action": "Get ref of agentGroups from onPremisesPublishingProfiles",
					"description": "List of onPremisesAgentGroups that a publishedResource is assigned to. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}/agentGroups/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Published Resources Create Ref Agent Groups",
					"value": "On Premises Publishing Profiles Published Resources Create Ref Agent Groups",
					"action": "Create new navigation property ref to agentGroups for onPremisesPublishingProfiles",
					"description": "Create new navigation property ref to agentGroups for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}/agentGroups/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Published Resources Delete Ref Agent Groups",
					"value": "On Premises Publishing Profiles Published Resources Delete Ref Agent Groups",
					"action": "Delete ref of navigation property agentGroups for onPremisesPublishingProfiles",
					"description": "Delete ref of navigation property agentGroups for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/publishedResources/{{$parameter[\"publishedResource-id\"]}}/agentGroups/{{$parameter[\"onPremisesAgentGroup-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles List Published Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Create Published Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Create Published Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Published Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Get Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Get Published Resources"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Get Published Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Update Published Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Update Published Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Agent Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Create Agent Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Create Agent Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources List Ref Agent Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Create Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Create Ref Agent Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/publishedResources/{publishedResource-id}/agentGroups/{onPremisesAgentGroup-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Delete Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Delete Ref Agent Groups"
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
						"On Premises Publishing Profiles Published Resource"
					],
					"operation": [
						"On Premises Publishing Profiles Published Resources Delete Ref Agent Groups"
					]
				}
			}
		},
];
