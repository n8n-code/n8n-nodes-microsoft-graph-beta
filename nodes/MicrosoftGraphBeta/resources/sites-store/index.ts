import type { INodeProperties } from 'n8n-workflow';

export const sitesStoreDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					]
				}
			},
			"options": [
				{
					"name": "Sites Delete Term Store",
					"value": "Sites Delete Term Store",
					"action": "Delete navigation property termStore for sites",
					"description": "Delete navigation property termStore for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore"
						}
					}
				},
				{
					"name": "Sites Get Term Store",
					"value": "Sites Get Term Store",
					"action": "Get store",
					"description": "Read the properties and relationships of a store object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore"
						}
					}
				},
				{
					"name": "Sites Update Term Store",
					"value": "Sites Update Term Store",
					"action": "Update the navigation property termStore in sites",
					"description": "Update the navigation property termStore in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore"
						}
					}
				},
				{
					"name": "Sites Term Store List Groups",
					"value": "Sites Term Store List Groups",
					"action": "List groups",
					"description": "Get the list of group objects of a store",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups"
						}
					}
				},
				{
					"name": "Sites Term Store Create Groups",
					"value": "Sites Term Store Create Groups",
					"action": "Create group",
					"description": "Create a new group object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups"
						}
					}
				},
				{
					"name": "Sites Term Store Delete Groups",
					"value": "Sites Term Store Delete Groups",
					"action": "Delete navigation property groups for sites",
					"description": "Delete navigation property groups for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Get Groups",
					"value": "Sites Term Store Get Groups",
					"action": "Get groups from sites",
					"description": "Collection of all groups available in the term store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Update Groups",
					"value": "Sites Term Store Update Groups",
					"action": "Update the navigation property groups in sites",
					"description": "Update the navigation property groups in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups List Sets",
					"value": "Sites Term Store Groups List Sets",
					"action": "List sets",
					"description": "Get a list of the set objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Create Sets",
					"value": "Sites Term Store Groups Create Sets",
					"action": "Create new navigation property to sets for sites",
					"description": "Create new navigation property to sets for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Delete Sets",
					"value": "Sites Term Store Groups Delete Sets",
					"action": "Delete navigation property sets for sites",
					"description": "Delete navigation property sets for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Get Sets",
					"value": "Sites Term Store Groups Get Sets",
					"action": "Get sets from sites",
					"description": "All sets under the group in a term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Update Sets",
					"value": "Sites Term Store Groups Update Sets",
					"action": "Update the navigation property sets in sites",
					"description": "Update the navigation property sets in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets List Children",
					"value": "Sites Term Store Groups Sets List Children",
					"action": "List children",
					"description": "Get the first level children of a [set] or [term] resource using the children navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Create Children",
					"value": "Sites Term Store Groups Sets Create Children",
					"action": "Create term",
					"description": "Create a new term object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Delete Children",
					"value": "Sites Term Store Groups Sets Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Get Children",
					"value": "Sites Term Store Groups Sets Get Children",
					"action": "Get children from sites",
					"description": "Children terms of set in term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Update Children",
					"value": "Sites Term Store Groups Sets Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children List Children",
					"value": "Sites Term Store Groups Sets Children List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Create Children",
					"value": "Sites Term Store Groups Sets Children Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Delete Children",
					"value": "Sites Term Store Groups Sets Children Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Get Children",
					"value": "Sites Term Store Groups Sets Children Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Update Children",
					"value": "Sites Term Store Groups Sets Children Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children List Relations",
					"value": "Sites Term Store Groups Sets Children Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Create Relations",
					"value": "Sites Term Store Groups Sets Children Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Delete Relations",
					"value": "Sites Term Store Groups Sets Children Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Get Relations",
					"value": "Sites Term Store Groups Sets Children Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Update Relations",
					"value": "Sites Term Store Groups Sets Children Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Relations Get From Term",
					"value": "Sites Term Store Groups Sets Children Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Relations Get Set",
					"value": "Sites Term Store Groups Sets Children Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Relations Get To Term",
					"value": "Sites Term Store Groups Sets Children Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Children Get Set",
					"value": "Sites Term Store Groups Sets Children Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children List Relations",
					"value": "Sites Term Store Groups Sets Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Create Relations",
					"value": "Sites Term Store Groups Sets Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Delete Relations",
					"value": "Sites Term Store Groups Sets Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Get Relations",
					"value": "Sites Term Store Groups Sets Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Update Relations",
					"value": "Sites Term Store Groups Sets Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Relations Get From Term",
					"value": "Sites Term Store Groups Sets Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Relations Get Set",
					"value": "Sites Term Store Groups Sets Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Relations Get To Term",
					"value": "Sites Term Store Groups Sets Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Children Get Set",
					"value": "Sites Term Store Groups Sets Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Delete Parent Group",
					"value": "Sites Term Store Groups Sets Delete Parent Group",
					"action": "Delete navigation property parentGroup for sites",
					"description": "Delete navigation property parentGroup for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Get Parent Group",
					"value": "Sites Term Store Groups Sets Get Parent Group",
					"action": "Get parentGroup from sites",
					"description": "The parent [group] that contains the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Update Parent Group",
					"value": "Sites Term Store Groups Sets Update Parent Group",
					"action": "Update the navigation property parentGroup in sites",
					"description": "Update the navigation property parentGroup in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets List Relations",
					"value": "Sites Term Store Groups Sets List Relations",
					"action": "List relations",
					"description": "Get the different relation of a [term] or [set] from the relations navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Create Relations",
					"value": "Sites Term Store Groups Sets Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Delete Relations",
					"value": "Sites Term Store Groups Sets Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Get Relations",
					"value": "Sites Term Store Groups Sets Get Relations",
					"action": "Get relations from sites",
					"description": "Indicates which terms have been pinned or reused directly under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Update Relations",
					"value": "Sites Term Store Groups Sets Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Relations Get From Term",
					"value": "Sites Term Store Groups Sets Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Relations Get Set",
					"value": "Sites Term Store Groups Sets Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Relations Get To Term",
					"value": "Sites Term Store Groups Sets Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets List Terms",
					"value": "Sites Term Store Groups Sets List Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Create Terms",
					"value": "Sites Term Store Groups Sets Create Terms",
					"action": "Create new navigation property to terms for sites",
					"description": "Create new navigation property to terms for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Delete Terms",
					"value": "Sites Term Store Groups Sets Delete Terms",
					"action": "Delete navigation property terms for sites",
					"description": "Delete navigation property terms for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Get Terms",
					"value": "Sites Term Store Groups Sets Get Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Update Terms",
					"value": "Sites Term Store Groups Sets Update Terms",
					"action": "Update the navigation property terms in sites",
					"description": "Update the navigation property terms in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms List Children",
					"value": "Sites Term Store Groups Sets Terms List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Create Children",
					"value": "Sites Term Store Groups Sets Terms Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Delete Children",
					"value": "Sites Term Store Groups Sets Terms Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Get Children",
					"value": "Sites Term Store Groups Sets Terms Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Update Children",
					"value": "Sites Term Store Groups Sets Terms Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children List Relations",
					"value": "Sites Term Store Groups Sets Terms Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Create Relations",
					"value": "Sites Term Store Groups Sets Terms Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Delete Relations",
					"value": "Sites Term Store Groups Sets Terms Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Get Relations",
					"value": "Sites Term Store Groups Sets Terms Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Update Relations",
					"value": "Sites Term Store Groups Sets Terms Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Relations Get From Term",
					"value": "Sites Term Store Groups Sets Terms Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Relations Get Set",
					"value": "Sites Term Store Groups Sets Terms Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Relations Get To Term",
					"value": "Sites Term Store Groups Sets Terms Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Children Get Set",
					"value": "Sites Term Store Groups Sets Terms Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms List Relations",
					"value": "Sites Term Store Groups Sets Terms List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Create Relations",
					"value": "Sites Term Store Groups Sets Terms Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Delete Relations",
					"value": "Sites Term Store Groups Sets Terms Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Get Relations",
					"value": "Sites Term Store Groups Sets Terms Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Update Relations",
					"value": "Sites Term Store Groups Sets Terms Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Relations Get From Term",
					"value": "Sites Term Store Groups Sets Terms Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Relations Get Set",
					"value": "Sites Term Store Groups Sets Terms Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Relations Get To Term",
					"value": "Sites Term Store Groups Sets Terms Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Groups Sets Terms Get Set",
					"value": "Sites Term Store Groups Sets Terms Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/groups/{{$parameter[\"group-id\"]}}/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store List Sets",
					"value": "Sites Term Store List Sets",
					"action": "Get sets from sites",
					"description": "Collection of all sets available in the term store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Create Sets",
					"value": "Sites Term Store Create Sets",
					"action": "Create new navigation property to sets for sites",
					"description": "Create new navigation property to sets for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Delete Sets",
					"value": "Sites Term Store Delete Sets",
					"action": "Delete navigation property sets for sites",
					"description": "Delete navigation property sets for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Get Sets",
					"value": "Sites Term Store Get Sets",
					"action": "Get sets from sites",
					"description": "Collection of all sets available in the term store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Update Sets",
					"value": "Sites Term Store Update Sets",
					"action": "Update the navigation property sets in sites",
					"description": "Update the navigation property sets in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets List Children",
					"value": "Sites Term Store Sets List Children",
					"action": "List children",
					"description": "Get the first level children of a [set] or [term] resource using the children navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Create Children",
					"value": "Sites Term Store Sets Create Children",
					"action": "Create term",
					"description": "Create a new term object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Delete Children",
					"value": "Sites Term Store Sets Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Get Children",
					"value": "Sites Term Store Sets Get Children",
					"action": "Get children from sites",
					"description": "Children terms of set in term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Update Children",
					"value": "Sites Term Store Sets Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children List Children",
					"value": "Sites Term Store Sets Children List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Create Children",
					"value": "Sites Term Store Sets Children Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Delete Children",
					"value": "Sites Term Store Sets Children Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Get Children",
					"value": "Sites Term Store Sets Children Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Update Children",
					"value": "Sites Term Store Sets Children Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children List Relations",
					"value": "Sites Term Store Sets Children Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Create Relations",
					"value": "Sites Term Store Sets Children Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Delete Relations",
					"value": "Sites Term Store Sets Children Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Get Relations",
					"value": "Sites Term Store Sets Children Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Update Relations",
					"value": "Sites Term Store Sets Children Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Relations Get From Term",
					"value": "Sites Term Store Sets Children Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Relations Get Set",
					"value": "Sites Term Store Sets Children Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Relations Get To Term",
					"value": "Sites Term Store Sets Children Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Children Get Set",
					"value": "Sites Term Store Sets Children Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children List Relations",
					"value": "Sites Term Store Sets Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Create Relations",
					"value": "Sites Term Store Sets Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Delete Relations",
					"value": "Sites Term Store Sets Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Get Relations",
					"value": "Sites Term Store Sets Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Update Relations",
					"value": "Sites Term Store Sets Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Relations Get From Term",
					"value": "Sites Term Store Sets Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Relations Get Set",
					"value": "Sites Term Store Sets Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Relations Get To Term",
					"value": "Sites Term Store Sets Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Children Get Set",
					"value": "Sites Term Store Sets Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/children/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Delete Parent Group",
					"value": "Sites Term Store Sets Delete Parent Group",
					"action": "Delete navigation property parentGroup for sites",
					"description": "Delete navigation property parentGroup for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Get Parent Group",
					"value": "Sites Term Store Sets Get Parent Group",
					"action": "Get parentGroup from sites",
					"description": "The parent [group] that contains the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Update Parent Group",
					"value": "Sites Term Store Sets Update Parent Group",
					"action": "Update the navigation property parentGroup in sites",
					"description": "Update the navigation property parentGroup in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group List Sets",
					"value": "Sites Term Store Sets Parent Group List Sets",
					"action": "List sets",
					"description": "Get a list of the set objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Create Sets",
					"value": "Sites Term Store Sets Parent Group Create Sets",
					"action": "Create new navigation property to sets for sites",
					"description": "Create new navigation property to sets for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Delete Sets",
					"value": "Sites Term Store Sets Parent Group Delete Sets",
					"action": "Delete navigation property sets for sites",
					"description": "Delete navigation property sets for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Get Sets",
					"value": "Sites Term Store Sets Parent Group Get Sets",
					"action": "Get sets from sites",
					"description": "All sets under the group in a term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Update Sets",
					"value": "Sites Term Store Sets Parent Group Update Sets",
					"action": "Update the navigation property sets in sites",
					"description": "Update the navigation property sets in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets List Children",
					"value": "Sites Term Store Sets Parent Group Sets List Children",
					"action": "List children",
					"description": "Get the first level children of a [set] or [term] resource using the children navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Create Children",
					"value": "Sites Term Store Sets Parent Group Sets Create Children",
					"action": "Create term",
					"description": "Create a new term object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Delete Children",
					"value": "Sites Term Store Sets Parent Group Sets Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Get Children",
					"value": "Sites Term Store Sets Parent Group Sets Get Children",
					"action": "Get children from sites",
					"description": "Children terms of set in term [store].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Update Children",
					"value": "Sites Term Store Sets Parent Group Sets Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children List Children",
					"value": "Sites Term Store Sets Parent Group Sets Children List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Create Children",
					"value": "Sites Term Store Sets Parent Group Sets Children Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Delete Children",
					"value": "Sites Term Store Sets Parent Group Sets Children Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Get Children",
					"value": "Sites Term Store Sets Parent Group Sets Children Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Update Children",
					"value": "Sites Term Store Sets Parent Group Sets Children Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children List Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Create Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Delete Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Get Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Update Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Relations Get From Term",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Relations Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Relations Get To Term",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Children Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Children Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children List Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Create Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Delete Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Get Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Update Relations",
					"value": "Sites Term Store Sets Parent Group Sets Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Relations Get From Term",
					"value": "Sites Term Store Sets Parent Group Sets Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Relations Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Relations Get To Term",
					"value": "Sites Term Store Sets Parent Group Sets Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Children Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/children/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets List Relations",
					"value": "Sites Term Store Sets Parent Group Sets List Relations",
					"action": "List relations",
					"description": "Get the different relation of a [term] or [set] from the relations navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Create Relations",
					"value": "Sites Term Store Sets Parent Group Sets Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Delete Relations",
					"value": "Sites Term Store Sets Parent Group Sets Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Get Relations",
					"value": "Sites Term Store Sets Parent Group Sets Get Relations",
					"action": "Get relations from sites",
					"description": "Indicates which terms have been pinned or reused directly under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Update Relations",
					"value": "Sites Term Store Sets Parent Group Sets Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Relations Get From Term",
					"value": "Sites Term Store Sets Parent Group Sets Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Relations Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Relations Get To Term",
					"value": "Sites Term Store Sets Parent Group Sets Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets List Terms",
					"value": "Sites Term Store Sets Parent Group Sets List Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Create Terms",
					"value": "Sites Term Store Sets Parent Group Sets Create Terms",
					"action": "Create new navigation property to terms for sites",
					"description": "Create new navigation property to terms for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Delete Terms",
					"value": "Sites Term Store Sets Parent Group Sets Delete Terms",
					"action": "Delete navigation property terms for sites",
					"description": "Delete navigation property terms for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Get Terms",
					"value": "Sites Term Store Sets Parent Group Sets Get Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Update Terms",
					"value": "Sites Term Store Sets Parent Group Sets Update Terms",
					"action": "Update the navigation property terms in sites",
					"description": "Update the navigation property terms in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms List Children",
					"value": "Sites Term Store Sets Parent Group Sets Terms List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Create Children",
					"value": "Sites Term Store Sets Parent Group Sets Terms Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Delete Children",
					"value": "Sites Term Store Sets Parent Group Sets Terms Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Get Children",
					"value": "Sites Term Store Sets Parent Group Sets Terms Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Update Children",
					"value": "Sites Term Store Sets Parent Group Sets Terms Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children List Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Create Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Delete Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Get Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Update Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get From Term",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get To Term",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Children Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Terms Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms List Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Create Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Delete Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Get Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Update Relations",
					"value": "Sites Term Store Sets Parent Group Sets Terms Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Relations Get From Term",
					"value": "Sites Term Store Sets Parent Group Sets Terms Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Relations Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Terms Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Relations Get To Term",
					"value": "Sites Term Store Sets Parent Group Sets Terms Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Parent Group Sets Terms Get Set",
					"value": "Sites Term Store Sets Parent Group Sets Terms Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/parentGroup/sets/{{$parameter[\"set-id1\"]}}/terms/{{$parameter[\"term-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets List Relations",
					"value": "Sites Term Store Sets List Relations",
					"action": "List relations",
					"description": "Get the different relation of a [term] or [set] from the relations navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Create Relations",
					"value": "Sites Term Store Sets Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Delete Relations",
					"value": "Sites Term Store Sets Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Get Relations",
					"value": "Sites Term Store Sets Get Relations",
					"action": "Get relations from sites",
					"description": "Indicates which terms have been pinned or reused directly under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Update Relations",
					"value": "Sites Term Store Sets Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Relations Get From Term",
					"value": "Sites Term Store Sets Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Relations Get Set",
					"value": "Sites Term Store Sets Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Relations Get To Term",
					"value": "Sites Term Store Sets Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets List Terms",
					"value": "Sites Term Store Sets List Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Create Terms",
					"value": "Sites Term Store Sets Create Terms",
					"action": "Create new navigation property to terms for sites",
					"description": "Create new navigation property to terms for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Delete Terms",
					"value": "Sites Term Store Sets Delete Terms",
					"action": "Delete navigation property terms for sites",
					"description": "Delete navigation property terms for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Get Terms",
					"value": "Sites Term Store Sets Get Terms",
					"action": "Get terms from sites",
					"description": "All the terms under the set.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Update Terms",
					"value": "Sites Term Store Sets Update Terms",
					"action": "Update the navigation property terms in sites",
					"description": "Update the navigation property terms in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms List Children",
					"value": "Sites Term Store Sets Terms List Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Create Children",
					"value": "Sites Term Store Sets Terms Create Children",
					"action": "Create new navigation property to children for sites",
					"description": "Create new navigation property to children for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Delete Children",
					"value": "Sites Term Store Sets Terms Delete Children",
					"action": "Delete navigation property children for sites",
					"description": "Delete navigation property children for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Get Children",
					"value": "Sites Term Store Sets Terms Get Children",
					"action": "Get children from sites",
					"description": "Children of current term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Update Children",
					"value": "Sites Term Store Sets Terms Update Children",
					"action": "Update the navigation property children in sites",
					"description": "Update the navigation property children in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children List Relations",
					"value": "Sites Term Store Sets Terms Children List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Create Relations",
					"value": "Sites Term Store Sets Terms Children Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Delete Relations",
					"value": "Sites Term Store Sets Terms Children Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Get Relations",
					"value": "Sites Term Store Sets Terms Children Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Update Relations",
					"value": "Sites Term Store Sets Terms Children Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Relations Get From Term",
					"value": "Sites Term Store Sets Terms Children Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Relations Get Set",
					"value": "Sites Term Store Sets Terms Children Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Relations Get To Term",
					"value": "Sites Term Store Sets Terms Children Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Children Get Set",
					"value": "Sites Term Store Sets Terms Children Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/children/{{$parameter[\"term-id1\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms List Relations",
					"value": "Sites Term Store Sets Terms List Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Create Relations",
					"value": "Sites Term Store Sets Terms Create Relations",
					"action": "Create new navigation property to relations for sites",
					"description": "Create new navigation property to relations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Delete Relations",
					"value": "Sites Term Store Sets Terms Delete Relations",
					"action": "Delete navigation property relations for sites",
					"description": "Delete navigation property relations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Get Relations",
					"value": "Sites Term Store Sets Terms Get Relations",
					"action": "Get relations from sites",
					"description": "To indicate which terms are related to the current term as either pinned or reused.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Update Relations",
					"value": "Sites Term Store Sets Terms Update Relations",
					"action": "Update the navigation property relations in sites",
					"description": "Update the navigation property relations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Relations Get From Term",
					"value": "Sites Term Store Sets Terms Relations Get From Term",
					"action": "Get fromTerm from sites",
					"description": "The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/fromTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Relations Get Set",
					"value": "Sites Term Store Sets Terms Relations Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the relation is relevant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/set"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Relations Get To Term",
					"value": "Sites Term Store Sets Terms Relations Get To Term",
					"action": "Get toTerm from sites",
					"description": "The to [term] of the relation. The term to which the relationship is defined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/relations/{{$parameter[\"relation-id\"]}}/toTerm"
						}
					}
				},
				{
					"name": "Sites Term Store Sets Terms Get Set",
					"value": "Sites Term Store Sets Terms Get Set",
					"action": "Get set from sites",
					"description": "The [set] in which the term is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/termStore/sets/{{$parameter[\"set-id\"]}}/terms/{{$parameter[\"term-id\"]}}/set"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Delete Term Store"
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
						"Sites Store"
					],
					"operation": [
						"Sites Delete Term Store"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Get Term Store"
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
						"Sites Store"
					],
					"operation": [
						"Sites Get Term Store"
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
						"Sites Store"
					],
					"operation": [
						"Sites Get Term Store"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Update Term Store"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Update Term Store"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Create Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Create Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Delete Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Delete Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Groups"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Update Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Update Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups List Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Create Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Create Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Delete Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Delete Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Get Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Update Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Update Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets List Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Delete Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Get Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Groups Sets Terms Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store List Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Create Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Create Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Delete Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Delete Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Get Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Update Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Update Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Parent Group"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Parent Group"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group List Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Create Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Create Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Delete Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Delete Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Get Sets"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Get Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Update Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Update Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets List Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Delete Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Get Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Parent Group Sets Terms Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets List Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Create Terms"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Delete Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Terms"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Get Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Update Terms"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Create Children"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Delete Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Delete Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Children"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Update Children"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children/{term-id1}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Children Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms List Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Create Relations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Delete Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Delete Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Relations"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Update Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get From Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get From Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get Set"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get To Term"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Relations Get To Term"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/set",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Set"
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
						"Sites Store"
					],
					"operation": [
						"Sites Term Store Sets Terms Get Set"
					]
				}
			}
		},
];
